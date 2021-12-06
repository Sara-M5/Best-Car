import React, {useState, useEffect} from 'react';
import { HashLink as Link } from "react-router-hash-link";
import './Navbar.css';



export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 80){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  };
  window.addEventListener('scroll',changeBackground);
    return (
      <nav className="">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand navbar-logo" to="/" exact>
          <h4>Best Car</h4>
        </Link>

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
            <li className="nav-item active">
             
              <Link className="nav-link" smooth to="/Home" exact>
                Home
              </Link>

            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="#typesOfCar" exact>
                Types Of Car
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="#Service" exact>
                Services
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="#Gallery" exact>
                Gallery
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="#WhyUs" exact>
                Why Us
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="#Contact" exact>
                Contact
              </Link>
            </li>
          </ul>
          <div className="col-xl-2 mx-5">
        <div className="header-btn d-xl-block">
          <ul className="navbar-nav">
            <li className="nav-item "> 
            <Link  to="/login" className="nav-link" exact>
             Login
             </Link>
             </li>
             <li className="nav-item "> 
            <Link  to="/sign-up" className="nav-link" exact>
             Sign Up
             </Link>
             </li>
          </ul>
           
        </div>
      </div>
        
        </div>
      </div>
     
    </nav>
    )
}
