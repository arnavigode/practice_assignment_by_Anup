import React from 'react'
import "./Card.css"
import Carousel from '../Carousal/Carousel'
import Dropdown from './DropDown';


const Card = () => {
    const slides = [
        "https://picsum.photos/id/1032/1200/400",
        "https://picsum.photos/id/1033/1200/400",
        "https://picsum.photos/id/1037/1200/400",
        "https://picsum.photos/id/1035/1200/400",
        "https://picsum.photos/id/1036/1200/400",
      ]

    return (
        <div>
           <div className="containerCard">
               <div className="wrap-cont">
                   <div className="carousel-cont">
                   <Carousel slides={slides} controls indicators width={1000} height={200} autoPlay = {false} />
                    <Dropdown/>
                   </div>
                   <br />
                   <br />
               </div>
           </div>
        </div>
    )
}

export default Card
