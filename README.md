# 📋 Task Management API

A robust RESTful API for managing tasks and users built with Node.js, Express, MongoDB, and JWT authentication. Includes Swagger for API documentation.

---

## 🛠️ Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Abdelkhalek-29/Icloud_test
   cd Icloud_test
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory and add:

   ```env
   CONNECTION_URL=mongodb://127.0.0.1:27017/taskapi
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

5. **View API documentation:**

   Open your browser and go to:

   ```
   http://localhost:5000/api-docs
   ```

   You'll find interactive documentation powered by Swagger UI.

---

## 📦 Features

- User Registration & Login (JWT Auth)
- Task CRUD (Create, Read, Update, Delete)
- Task assignment per user
- Global error handling
- Input validation
- Swagger API Documentation

---

## 📌 Endpoints Summary

### 🔐 Authentication

- `POST api/auth/register` – Register a new user
- `POST api/auth/login` – Login and receive a JWT token

### 📋 Tasks

- `GET api/task/tasks` – Get all tasks
- `GET api/task/tasks/:id` – Get task by ID
- `POST api/task/tasks` – Create new task (auth required)
- `PUT api/task/tasks/:id` – Update task by ID (auth required)
- `DELETE api/task/tasks/:id` – Delete task by ID (auth required)
- `GET api/task/users/:id/tasks` – Get tasks assigned to a specific user (auth required)

---

## 🔐 Authentication

All protected routes require an Authorization header:

```http
Authorization: Bearer <your_jwt_token>
```

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT
- bcryptjs
- Swagger (swagger-jsdoc + swagger-ui-express)

---
