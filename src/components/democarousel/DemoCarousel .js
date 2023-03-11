import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel}  from 'react-responsive-carousel';


const DemoCarousel  = (props) => {
    return (
        <>
            <Carousel>
                <div className=''>
                    <img src={props.imgsrc}
                    alt='/' />
                    <p className="legend">{props.name}</p>
                </div>
                <div>
                    <img src={props.imgsrc} 
                    alt='/'/>
                    <p className="legend">{props.name}</p>
                </div>
                <div>
                    <img src={props.imgsrc} 
                    alt='/'/>
                    <p className="legend">{props.name}</p>
                </div>
            </Carousel>
        </>
    )
}

export default DemoCarousel 