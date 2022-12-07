import { useEffect, useState } from 'react';
import './PictureCarousel.css'

const Carousel = (props) => {
    const data = [`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.data.id}.png`, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${props.data.id}.png`, "3", "4"]
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselInfiniteScroll = () => {
        if (currentIndex === data.length - 1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => { carouselInfiniteScroll() }, 3000)
        // clean up function
        return () => clearInterval(interval)
    })

    return (
        <div className='carousel-container'>
            {data.map((item, index) => {
                return <img src={item} className='carousel-item'
                    style={{ transform: `translate(-${currentIndex * 100}%)` }}
                    key={index} onError={(e) => { e.target.onError = null; e.target.style = `transition:` }}></img>
            })}
        </div>
    )
}
export default Carousel