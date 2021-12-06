import React from 'react'
import Card from './Card';

function Cards() {
    return (
        <div className="why-us grid-3">
            <div className="">
               
            <Card 
                  image="/img/new (1).png"
                  title="Mahindra Scropio"
                  speed="350 kmph"
                  range="450km"
                  date="march 2, 2017"
                  price="$59.000"
                  alt="cmv car" />
            </div>
            <div className="">
            <Card 
                  image="/img/new (2).png"
                  title="chevrolet Camaro"
                  speed="350 kmph"
                  range="450km"
                  date="march 2, 2017"
                  price="$59.000"
                  alt="cmv car" />
            </div>
            <div className="">
            <Card 
                  image="/img/new (3).png"
                  title="Lomborghini"
                  speed="350 kmph"
                  range="450km"
                  date="march 2, 2017"
                  price="$59.000"
                  alt="cmv car" />
                  
            </div>
            
        </div>

    )
}

export default Cards
