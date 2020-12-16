import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

class Navbar extends Component {
  state = {  }
  render() { 
    return ( 
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
        <Link className="navbar-brand" to="/">Real App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/my-cars">My Cards</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav nl-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/signin">Signin</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">Signup</NavLink>
            </li>
          </ul>
        </div>
        </div>
      </nav>
     );
  }
}
 
export default Navbar;
