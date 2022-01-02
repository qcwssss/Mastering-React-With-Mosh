// import React, { Component } from "react";

// Stateless Functional Component
const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-brand navbar-light bg-light">
      Navbar{" "}
      <span className="badge badge-pill badge-secondary">{totalCounters}</span>
    </nav>
  );
};

export default Navbar;
