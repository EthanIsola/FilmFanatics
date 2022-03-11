import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return( 
  <div className="navbar">
    <nav>
      <NavLink exact to="/">Movies  </NavLink>
      <NavLink to="/login">Login  </NavLink>
      <NavLink to="/search">Search  </NavLink>
      <NavLink to="/profile">Profile  </NavLink>
    </nav>  
  </div>)
}

export default NavBar;
