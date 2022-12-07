import { useEffect, useState } from 'react';
import './PictureCarousel.css';

const Carousel = (props) => {
    const data = [`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.data.id}.png`, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${props.data.id}.png`, "3", "4"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselInfiniteScroll = () => {
        if (currentIndex === data.length - 1) {
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => { carouselInfiniteScroll(); }, 3000);
        // clean up function
        return () => clearInterval(interval);
    });

    // data.map((item) => {
    //     console.log(item);
    //     let i = data.indexOf(item);
    //     console.log(i);
    //     try {
    //         const src = require(item);
    //         // this.setState({ src });

    //     }
    //     catch (err) {
    //         console.log("ERROR");
    //         data.splice(i, 1);
    //         console.log(data);
    //         //Do whatever you want when the image failed to load here
    //     }
    // });



    function checkIfImageExists(url, callback) {
        const img = new Image();
        img.src = url;

        if (img.complete) {
            callback(true);
        } else {
            img.onload = () => {
                callback(true);
            };

            img.onerror = () => {
                callback(false);
            };
        }
    }


    data.map((item) => {
        checkIfImageExists(item, (exists) => {
            if (exists) {
            } else {
                let i = data.indexOf(item);
                data.splice(i, 1);
                console.log("hallohalli");
            }
        });
    });



    // console.log(checkImage("abced"));
    return (
        <div className='carousel-container'>
            {data.map((item, index) => {
                return <img src={item} alt="img" className='carousel-item'
                    style={{ transform: `translate(-${currentIndex * 100}%)` }}
                    key={index} onError={(e) => {
                        e.target.onError = null;
                        let i = data.indexOf(item);
                        data.splice(i, 1);
                        console.log(data);
                    }}></img>;
            })}
        </div>
    );
};
export default Carousel;