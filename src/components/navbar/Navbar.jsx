import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <NavLink exact activeClassName="active_class" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/about">
          About
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/contact">
          Contact
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/chat">
          Chat
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/CodeCollab">
        CodeCollab
        </NavLink>
      </div>
    </>
  );
};
export default Navbar;
