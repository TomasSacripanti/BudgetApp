import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Budget App
        </Link>
        <Link to="https://github.com/TomasSacripanti/" className="nav-link">Created by Tomás Sacripanti</Link>
      </div>
    </nav>
  );
}

export default Navbar;
