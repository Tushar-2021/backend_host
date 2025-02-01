# Project Title

This repository contains the frontend and backend code for the **Host App**, which includes multiple modules for chat and email functionalities.



## Project Structure

```
frontend_ui/
├── chat/
├── email/
└── host/

backend_blue/
├── chat-app/
└── mail-app/
```

- **Frontend:** Built using React with each module having its own `node_modules`, `public`, and `src` directories.
- **Backend:** Node.js based applications for chat and email functionalities.

## Technologies Used
- **Frontend:** React, Webpack
- **Backend:** Node.js, Express
- **Package Management:** npm

## Installation

1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/Tushar-2021/host_app.git
   cd host_app
   ```

2. **Install Dependencies:**
   - For frontend:
     ```bash
     cd frontend_ui/chat
     npm install
     cd ../email
     npm install
     cd ../host
     npm install
     ```
   - For backend:
     ```bash
     cd backend_blue/chat-app
     npm install
     cd ../mail-app
     npm install
     ```

## Running the Project

- **Frontend:**
  ```bash
  cd frontend_ui/chat
  npm start
  ```
  Repeat the process for `email` and `host` modules.

- **Backend:**
  ```bash
  cd backend_blue/chat-app
  node server.js
  ```
  Similarly, run the mail-app:
  ```bash
  cd ../mail-app
  node server.js
  ```

## Environment Variables

- Place environment variables in `.env` files inside the respective backend folders (e.g., `mail-app/.env`).
- Example `.env` file:
  ```env
  PORT=3000
  DATABASE_URL=mongodb://localhost:27017/dbname
  SECRET_KEY=your_secret_key
  ```

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-branch`
5. Create a pull request.



