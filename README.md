# Ziptrrip Todo Application

A full-stack Todo Management application developed as part of the Ziptrrip Developer Internship Assignment.

## Features

- Add a new todo
- View all todos
- View individual todo details
- Update existing todos
- Delete todos
- Search todos
- Filter by status (All, Pending, Completed)
- Set priority (High, Medium, Low)
- Set due date
- Responsive user interface

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

## Project Structure

```
ziptrrip-todo-app
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
├── backend
│   ├── models
│   ├── routes
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone <your-github-repository-link>
```

---

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/todos | Fetch all todos |
| GET | /api/todos/:id | Fetch a single todo |
| POST | /api/todos | Create a new todo |
| PUT | /api/todos/:id | Update a todo |
| DELETE | /api/todos/:id | Delete a todo |

---

## Future Improvements

- User Authentication
- Dark Mode
- Drag and Drop Todos
- Notifications
- File Attachments
- Calendar Integration

---

## Author

**Siva Naga Bhavani Gandla**

Integrated M.Tech (Software Engineering)

VIT-AP University

---

## Assignment

This project was developed for the **Ziptrrip Developer Internship Assignment**.
