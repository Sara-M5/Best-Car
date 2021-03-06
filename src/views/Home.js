import React, { useState } from "react";
import Cards from '../components/cards/Cards';
import Gallerys from "../components/gallery/Gallerys";
import Banner from '../parts/banner/Banner';
import Header from '../parts/header/Header';
import TypesOfCar from "../parts/typesOfCar/TypesOfCar";
import Services from "../parts/services/Services";
import WhyUs from "../parts/whyUs/WhyUs";
import Contact from "../parts/contact/Contact";

export default function Home() {
    const [carState] = useState({
        gallery: [
            { id: "1", image:"img/car 1 (24).jpg", title:"profession Design"},
            { id: "2", image:"img/car 1 (28).jpg", title:"Tradaition Design"},
            { id: "3", image:"img/car 1 (30).jpg", title:"emotion design"}
        ]
    }) 
     
   
    return (
        <div>
        <div className="section">
            <Banner />
            
            </div>
            <div className="container">

               <div className="section" id="typesOfCar">
                  <Header title="Types Of car" />
                  <TypesOfCar />
               </div>

               <div className="section">
                  <Header title="new product" />
                  <Cards />
               </div>

                <div className="section" id="Service">
                <div className="service">
                  <Header title="Services" />
                  <Services />     
                </div>
               </div>

               
               <div className="section" >
               <Header title="Gallery" />
               <div id="Gallery">
                   <Gallerys gallery={carState.gallery} />
               </div>
               </div>
               <div className="section mt-5" id="WhyUs">
               <Header title="why us" />
                  <WhyUs />
               </div>
               </div>

               <div className="contact" id="Contact">
                    <Header title="contact us" />
                     <img  className="c-img" src="img/20211202_174716.png"/>
                    <Contact /> 
               </div>
             
            <div className="footer text-center">
              
                <p className="text p-2 my-0">Design by @ Sara Mahmoodi</p>
            </div>
           
        </div>
    )
}
