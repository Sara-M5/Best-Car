import React from 'react';
import './Login.css';

function Login(){
 return(
    <div className="login">
        <img className="loginImg" src="/img/eloginImg.jpg" alt="banner-img" />
    <span className="loginTitle">Login</span>
    <form className="loginForm">
        <input className="loginInput mt-3" type="email" id="email" placeholder="Enter Your Email"  />      
        <input className="loginInput" type="password" id="password" placeholder="Password" readonly />
        <button className="btn btn-warning mt-3">Login</button>
    </form>

</div>
 )
}

export default Login;