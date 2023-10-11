import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  useEffect(() => {
    if (expandNavbar) {
      // Disable scrolling when the navigation is expanded
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling when the navigation is collapsed
      document.body.style.overflow = "auto";
    }
  }, [expandNavbar]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <h2>NAM NGO</h2>
        <Link to="/"> About </Link>
        <Link to="/experience"> Experience </Link>
        <Link to="/projects" className="nav-link"> Projects </Link>
      </div>
    </div>
  );
}

export default Navbar;
