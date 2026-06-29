import "./Navbar.css";

function Navbar() {

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <nav className="navbar">

      <div className="logo">
        <span className="logoIcon">✔</span>
        <div>
          <h2>TodoSphere</h2>
          <p>Manage your daily tasks</p>
        </div>
      </div>

      <div className="navRight">
        <p>{today}</p>
      </div>

    </nav>
  );
}

export default Navbar;