import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className="banner">
            <img className="banner-img" src="/img/car 1 (21).jpg" alt="banner-img" />
            <div className="banner-text container bg-dark d-flex justify-content-center">
                <h1 className="text-light">We Move Dreams</h1>
                <button className="button px-3 mx-3 rounded">
                <span className="btn-text">Move</span>
                <span className="btn-icon"><i className="fas fa-chevron-right"></i></span>
                </button>
                
            </div>
            
        </div>
    )
}

export default Banner
