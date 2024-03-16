import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Link
        to="/"
        style={{
          fontWeight: "bold",
          textDecoration: "none",
          color: "black",
          fontSize: "40px",
        }}
      >
        My Portfolio
      </Link>
      <div>
        <Link
          to="/about"
          style={{ margin: "0 1rem", textDecoration: "none", color: "black" }}
        >
          About
        </Link>
        <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
