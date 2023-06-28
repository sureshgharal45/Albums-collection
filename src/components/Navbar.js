import React from "react";
import { Link } from "react-router-dom";

//Navbar
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h2>
          <span className="brand-first-half">ALBUMS</span>
          <span className="brand-last-half">LIST</span>
        </h2>
      </Link>
      <Link to="/add-album">
        <button>Add Album</button>
      </Link>
    </div>
  );
};

export default Navbar;
