// import React, { Component } from "react";

// Stateless Functional Component
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-brand navbar-light bg-light">
      Navbar{" "}
      <span className="badge badge-pill badge-secondary">
        {props.totalCounters}
      </span>
    </nav>
  );
};

export default Navbar;
