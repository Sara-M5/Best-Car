import React from 'react';
import  { NavLink }  from 'react-router-dom';

function Contact() {
    return (
        <div className="container">
            
            <div className="row">
           
            <div className="col-sm-6">
            <form className="form">
            <input className="form-control mt-2" type="text" id="name" placeholder="Enter your name" />
            <input className="form-control mt-2" type="email" id="email" placeholder="Enter your Email" />
            <textarea className="form-control mt-2" id="message" rows="3" placeholder="Enter your message" ></textarea>

            <button className="button px-3 rounded mt-3" type="submit">Submit</button>
            </form>
            </div>
            <div className="col-sm-6 row">
                  <NavLink to="/" className="nav-link d-flex contact-icon"><i className="icon fa fa-envelope"></i><span className="text-dark">car@example.com</span></NavLink>
                  <NavLink to="/" className="nav-link d-flex contact-icon"><i className="icon  fas fa-phone"></i><span className="text-dark">+ 18342765</span></NavLink>
                  <NavLink to="/" className="nav-link d-flex contact-icon"><i className="icon fa fa-map-marker"></i><span className="text-dark">kabul, Afghanistan</span></NavLink>
            </div>
            </div>  
        </div>
    )
}

export default Contact
