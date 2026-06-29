import { Link } from "react-router-dom";
import "./TodoCard.css";

function TodoCard({ todo }) {

  const priorityColor = {
    High: "#ef4444",
    Medium: "#f59e0b",
    Low: "#10b981"
  };

  return (
    <div className="todo-card">

      <div className="todo-top">

        <h3>{todo.title}</h3>

        <span
          className="priority"
          style={{ background: priorityColor[todo.priority] }}
        >
          {todo.priority}
        </span>

      </div>

      <p className="description">
        {todo.description}
      </p>

      <div className="todo-info">

        <span>
            📅 {todo.dueDate}
        </span>

        <span
          className={
            todo.status === "Completed"
              ? "completed"
              : "pending"
          }
        >
          {todo.status}
        </span>

      </div>

      <div className="actions">

        <Link to={`/todo?id=${todo._id}`}>

          <button className="viewBtn">
            View
          </button>

        </Link>

        <button className="editBtn">
          Edit
        </button>

        <button className="deleteBtn">
          Delete
        </button>

      </div>

    </div>
  );
}

export default TodoCard;