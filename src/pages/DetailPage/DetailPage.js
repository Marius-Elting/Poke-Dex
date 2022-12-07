import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/PictureCarousel/PictureCarousel';
// import { isButtonElement } from 'react-router-dom/dist/dom';

import './DetailPage.css';

function DetailPage() {
    const [pokeData, setPokeData] = useState([]);

    const params = useParams();

    useEffect(() => {
        // url ende ist die pokedex id
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
            .then(response => response.json())
            .then((pokeData) => {
                setPokeData(pokeData);
            });
    }, []);

    return (
        <section>
            <article>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData.id}.png`}></img>
                <p>{("000" + (pokeData.id)).slice(-3) + "#"}</p>
                <p></p>
                {/* Pokemon type*/}
                <p></p>
                <Carousel data={pokeData} />
            </article>
            <article>
                {/* Pokemon describtion */}
                {/* <h2>ATTACKS AND MOVEMENTS</h2> */}
                <p></p>
            </article>
        </section>
    )
};

export default DetailPage;


