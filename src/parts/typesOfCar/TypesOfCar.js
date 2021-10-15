import React from 'react'

function TypesOfCar() {
    return (
        <div class="row text-center mt-5 grid-3">
        <div className="col-md-3">
           <img className="type-car" src="/img/img (10).jpg" alt="car type" />
           <h2 className="mt-4">Toyota 4Runner</h2>
        </div>
        <div className="col-md-3">
        <img className="type-car" src="/img/img (7).jpg" alt="car type" />
           <h2 className="mt-4">Mercedes-Benz</h2>
        </div>
       
        <div className="col-md-3">
        <img className="type-car" src="/img/type3.jpg" alt="car type" />
           <h2 className="mt-4">Land Cruiser</h2>
        </div>  
  </div>
    )
}

export default TypesOfCar
