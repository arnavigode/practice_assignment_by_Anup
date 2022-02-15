const CarouselControls = ({ prev, next }) => {
    return (
        <div>
            <button className="carousel-control left" onClick={prev}> <b> ← </b> </button>
            <button className="carousel-control right" onClick={next}> <b> → </b> </button>
        </div>
    )
}

export default CarouselControls