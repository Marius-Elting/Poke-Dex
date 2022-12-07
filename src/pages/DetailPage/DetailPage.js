import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/PictureCarousel/PictureCarousel';
// import { isButtonElement } from 'react-router-dom/dist/dom';

import './DetailPage.css';

function DetailPage() {
    const [pokeData, setPokeData] = useState();

    const params = useParams();

    useEffect(() => {
        // url ende ist die pokedex id
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
            .then(response => response.json())
            .then((pokeData) => {
                setPokeData(pokeData);
            });
    }, []);

    if (pokeData === undefined) {
        return;
    }

    return (
        <section>
            <article>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData.id}.png`}></img>
                <h2>POKEDEX ID</h2>
                <p>{("000" + (pokeData.id)).slice(-3) + "#"}</p>
                <p></p>
                <h2>POKEMON TYPES</h2>
                <section>{pokeData?.types.map((item) => {
                    return (
                        <div>
                            <div>{item.type.name}</div>
                        </div>
                    );
                })}</section>
                <Carousel data={pokeData} />
            </article>
            <article>
                <h2> ABILITY</h2>
                <section>{pokeData?.abilities.map((item) => {
                    return (
                        <div>
                            <div>{item.ability.name}</div>
                        </div>
                    );
                })}</section>
                {/* MOVE */}
                {/* <section>{pokeData?.moves?.map((item) => {
                    return (
                        <div>
                            <div>{item.move.name}</div>
                        </div>
                    );
                })}</section> */}
            </article>
        </section>
    )
};

export default DetailPage;


