const express = require('express');
const WebSocket = require('ws');
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static('public'));

const clients = new Map(); // Store clients with their names

wss.on('connection', (ws) => {
  console.log('A new user connected.');

  ws.on('message', (message) => {
    const data = JSON.parse(message);

    if (data.type === 'register') {
      // Assign username to the WebSocket connection
      clients.set(ws, data.name);
      console.log(`${data.name} joined the chat.`);
      broadcastClientsList();
    } 
    else if (data.type === 'message') {
      const { recipient, text } = data;
      sendMessageToClient(ws, recipient, text);
    }
  });

  ws.on('close', () => {
    console.log(`${clients.get(ws)} disconnected.`);
    clients.delete(ws);
    broadcastClientsList();
  });
});

// Send the list of active users to all clients
function broadcastClientsList() {
  const clientNames = [...clients.values()];
  const payload = JSON.stringify({ type: 'clients', clients: clientNames });

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(payload);
    }
  });
}

// Send a private message to a specific client
function sendMessageToClient(senderWs, recipientName, text) {
  const senderName = clients.get(senderWs);

  wss.clients.forEach((client) => {
    if (clients.get(client) === recipientName && client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: 'message', from: senderName, text }));
    }
  });
}

server.listen(2000, () => {
  console.log('Server running on http://localhost:2000');
});
