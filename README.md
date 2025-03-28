# Authentication in MERN

## 📌 Introduction
This is a **MERN (MongoDB, Express.js, React, Node.js) Stack** project that implements a complete authentication system. It includes user registration, login, logout, JWT authentication, and password hashing to ensure security.

## 🚀 Features
- User Registration & Login
- Password Hashing using **bcrypt**
- JWT Authentication for Secure API Requests
- Protected Routes (Access Control)
- Logout Functionality
- MongoDB Database Integration

## 🛠️ Tech Stack
- **Frontend:** React.js, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT, bcrypt

## 📂 Project Structure
```
Authentication_in_MERN/
│-- client/                 # Frontend (React)
│-- server/                 # Backend (Node.js, Express)
│   ├── config/             # Configuration Files (DB, JWT)
│   ├── models/             # MongoDB Models (User Schema)
│   ├── routes/             # API Routes (Auth Routes)
│   ├── controllers/        # Business Logic (Authentication)
│   ├── middleware/         # Middleware (JWT Verification)
│   ├── .env                # Environment Variables
│   ├── server.js           # Main Server File
│-- README.md               # Documentation
```

## 🏗️ Setup & Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/srcvision/Authentication_in_MERN.git
cd Authentication_in_MERN
```

### 2️⃣ Backend Setup
```sh
cd server
npm install   # Install dependencies
npm start     # Start the backend server
```

### 3️⃣ Frontend Setup
```sh
cd client
npm install   # Install dependencies
npm start     # Start the React frontend
```

### 4️⃣ Environment Variables
Create a `.env` file inside the `server` directory and add:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## 🛡️ API Endpoints
| Method | Endpoint            | Description             |
|--------|--------------------|-------------------------|
| POST   | `/api/auth/register` | Register a new user    |
| POST   | `/api/auth/login`    | User login             |
| GET    | `/api/auth/user`     | Get logged-in user info |
| GET    | `/api/auth/logout`   | Logout user            |

## 📸 Screenshots
(Add screenshots of your UI here)

## 💡 Future Enhancements
- Google & Facebook OAuth Authentication
- Role-Based Access Control (RBAC)
- Two-Factor Authentication (2FA)

## 📜 License
This project is **MIT Licensed**.

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or a pull request.

## 📞 Contact
For any queries, reach out at [your-email@example.com](mailto:your-email@example.com).
