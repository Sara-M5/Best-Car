import React, {useState} from 'react';
import { NavLink } from "react-router-dom";



export default function Navbar() {
    return (
      <nav className="navbar fixed-top navbar-expand-sm navbar-light m-auto mb-3">
      <div className="container d-flex justify-content-between align-items-center">
        <NavLink className="navbar-brand navbar-logo" to="/" exact>
          <h4>Best Car</h4>
        </NavLink>

        <button
          className="navbar-toggler btn0"
          data-toggle="collapse"
          data-target="#navbarSuportedContent"
          aria-controls="navbarSuportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSuportedContent"
        >
          <ul className="navbar-nav text-center">
            <li className="nav-item active ">
              <NavLink className="nav-link" to="/Home" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/typesOfCar" exact>
                Types Of Car
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/services" exact>
                Services
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/gallery" exact>
                Gallery
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/why Us" exact>
                Why Us
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/Contact" exact>
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="col-xl-2 mx-5">
        <div className="header-btn d-xl-block">
          <ul className="navbar-nav">
            <li className="nav-item "> 
            <NavLink  to="/login" className="nav-link" exact>
             Login
             </NavLink>
             </li>
             <li className="nav-item "> 
            <NavLink  to="/sign-up" className="nav-link" exact>
             Sign Up
             </NavLink>
             </li>
          </ul>
           
        </div>
      </div>
        
        </div>
      </div>
     
    </nav>
    )
}
