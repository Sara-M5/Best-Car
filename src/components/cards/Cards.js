import React from 'react'
import Card from './Card';

function Cards() {
    return (
        <div className="why-us grid-3">
            <div className="">
               
            <Card 
                  image="/img/card (2).jpg"
                  title="Mahindra Scropio"
                  speed="350 kmph"
                  range="450km"
                  date="march 2, 2017"
                  price="$59.000"
                  alt="cmv car" />
            </div>
            <div className="">
            <Card 
                  image="/img/card (1).jpg"
                  title="chevrolet Camaro"
                  speed="350 kmph"
                  range="450km"
                  date="march 2, 2017"
                  price="$59.000"
                  alt="cmv car" />
            </div>
            <div className="">
            <Card 
                  image="/img/card (3).jpg"
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
