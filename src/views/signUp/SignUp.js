import React from 'react';
import './SignUp.css';

function SignUp() {
    return (
        <div className="signUp">
            <img className="signUpImg" src="/img/img (18).jpg" alt="banner-img" />
        <span className="signUpTitle">Sign Up</span>
        <form className="signUpForm">
            <input className="signUpInput mt-3" type="text" id="name" placeholder="Name"  /> 
            <input className="signUpInput mt-3" type="email" id="email" placeholder="Write Your Email Address"  />           
            <input className="signUpInput" type="password" id="password" placeholder="Creat a Password" readonly />
            <button className="btn btn-warning mt-3">Sign Up</button>
        </form>
    
    </div>
    )
}

export default SignUp
