import React from 'react';
import './Card.css';

function Card(props) {
    return (
    
            <div className="card">
                <div className="wrapper">
                    <div className="card_img" style={{background:"#fde719"}}>
                         <img className="img" src={props.image} alt="car" />
                    </div>
                    <div className="card-body p-4">    

                          <h4 className="card-title">{props.title}</h4>
                          <p className="text-center mb-5">{props.date}</p>
                          <p className="card-text">{props.speed}</p>
                          
                         

                         <div className="d-flex justify-content-between align-items-center"> 
                             
                        <div className="price ">{props.price}</div>
                         <button className="button px-3 rounded">
                           <span className="btn-text">Deatiles</span>
                           <span className="btn-icon"><i className="fas fa-chevron-right"></i></span>
                         </button>
                         </div>
                       
                    </div>
                </div>
            </div>
           
            
            
   
    )
}

export default Card
