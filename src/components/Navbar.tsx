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
      <a
        href="/"
        style={{
          fontWeight: "bold",
          textDecoration: "none",
          color: "black",
          fontSize: "40px",
        }}
      >
        My Portfolio
      </a>
      <div>
        <a
          href="/about"
          style={{ margin: "0 1rem", textDecoration: "none", color: "black" }}
        >
          About
        </a>
        <a href="/contact" style={{ textDecoration: "none", color: "black" }}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
