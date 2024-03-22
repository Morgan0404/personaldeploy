import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import ContactDetails from "./ContactDetails"; // Import ContactDetails

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Morgan's Portfolio
          </a>

          {/* "Get in touch" text to the left of the toggle button */}
          <span
            className="navbar-text text-white me-2"
            style={{ flexGrow: 1, textAlign: "right" }}
          >
            Get in touch
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark" style={{ padding: "0.50rem" }}>
          {/* Including ContactDetails within the collapsible content */}
          <span
            className="navbar-text text-white me-2"
            style={{ flexGrow: 1, textAlign: "center" }}
          ></span>
          <ContactDetails />
        </div>
      </div>
    </>
  );
};

export default Navbar;
