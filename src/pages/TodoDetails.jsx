import { useLocation, Link } from "react-router-dom";
import "./TodoDetails.css";

function TodoDetails() {
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="details-container">
        <h2>Todo Not Found</h2>

        <Link to="/">
          <button className="back-btn">
            Back to Home
          </button>
        </Link>
      </div>
    );
  }

  const { todo } = state;

  return (
    <div className="details-page">

      <div className="details-card">

        <h1>{todo.title}</h1>

        <div className="status-row">

          <span className={`priority ${todo.priority.toLowerCase()}`}>
            {todo.priority}
          </span>

          <span className={`status ${todo.status.toLowerCase()}`}>
            {todo.status}
          </span>

        </div>

        <div className="detail-box">

          <h3>Description</h3>

          <p>{todo.description}</p>

        </div>

        <div className="detail-grid">

          <div>
            <h4>Due Date</h4>
            <p>{todo.dueDate}</p>
          </div>

          <div>
            <h4>Priority</h4>
            <p>{todo.priority}</p>
          </div>

          <div>
            <h4>Status</h4>
            <p>{todo.status}</p>
          </div>

        </div>

        <Link to="/">
          <button className="back-btn">
            ← Back
          </button>
        </Link>

      </div>

    </div>
  );
}

export default TodoDetails;