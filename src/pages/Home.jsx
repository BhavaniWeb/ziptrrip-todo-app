import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import TodoForm from "../components/TodoForm";
import TodoCard from "../components/TodoCard";
import "./Home.css";

function Home() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Dummy data (replace with API call later)
    setTodos([
      {
        _id: 1,
        title: "Complete Ziptrrip Assignment",
        description: "Finish frontend and backend",
        priority: "High",
        status: "Pending",
        dueDate: "2026-06-29",
      },
      {
        _id: 2,
        title: "Learn Express",
        description: "Build REST APIs",
        priority: "Medium",
        status: "Completed",
        dueDate: "2026-06-30",
      },
    ]);
  }, []);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const matchesSearch = todo.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || todo.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [todos, search, filter]);

  return (
    <>
      <Navbar />

      <div className="home">

        <div className="hero">

          <div>
            <h1>My Todo Workspace</h1>
            <p>Stay organized. Stay productive.</p>
          </div>

          <button
            className="addBtn"
            onClick={() => setShowForm(true)}
          >
            + New Todo
          </button>

        </div>

        <div className="toolbar">

          <input
            type="text"
            placeholder="Search todos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="filters">

            <button
              onClick={() => setFilter("All")}
              className={filter === "All" ? "active" : ""}
            >
              All
            </button>

            <button
              onClick={() => setFilter("Pending")}
              className={filter === "Pending" ? "active" : ""}
            >
              Pending
            </button>

            <button
              onClick={() => setFilter("Completed")}
              className={filter === "Completed" ? "active" : ""}
            >
              Completed
            </button>

          </div>

        </div>

        {showForm && (
          <TodoForm
            setTodos={setTodos}
            setShowForm={setShowForm}
          />
        )}

        <div className="todoGrid">

          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => (
              <TodoCard
                key={todo._id}
                todo={todo}
                setTodos={setTodos}
              />
            ))
          ) : (
            <div className="emptyState">
              <h2>No Todos Found</h2>
              <p>Create a new task to get started.</p>
            </div>
          )}

        </div>

      </div>
    </>
  );
}

export default Home;