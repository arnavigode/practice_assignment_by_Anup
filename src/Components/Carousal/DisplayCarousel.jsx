import { useState } from 'react'
import Carousel from './Carousel'

 


const DisplayCarousel = () => {
  const slides = [
    "https://picsum.photos/id/1032/1200/400",
    "https://picsum.photos/id/1033/1200/400",
    "https://picsum.photos/id/1037/1200/400",
    "https://picsum.photos/id/1035/1200/400",
    "https://picsum.photos/id/1036/1200/400",
  ]
    return (
      <div className="container">
      <Carousel slides={slides} controls indicators width={1200} />
    </div>
    )

    }
export default DisplayCarousel
