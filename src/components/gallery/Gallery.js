import React from 'react'
import "./Gallery.css"

function Gallery(props) {
    return (
        <div className="container row align-items-center">
           
            <div className="col">
            <img className="gallery-img mt-5 mb-0" src={props.image}  alt="car-design" />
            </div>
            <div className="col">
            <h3 className="gallery-text">{props.title}</h3>
            </div>
            <div className="col">
            <span className="gallery-btn btn">Read More <i className="g-icon p-2 fas fa-chevron-right"></i>
            </span>
            
            </div>
           
        </div>
    )
}

export default Gallery
