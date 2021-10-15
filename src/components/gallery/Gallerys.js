import React from 'react'
import Gallery from './Gallery'

const Gallerys = (props) => props.gallery.map((item, index) => {
     return <Gallery 
        image={item.image}
        title={item.title}
        key={item.id}
     />
        
});

export default Gallerys
