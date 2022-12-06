

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { isButtonElement } from 'react-router-dom/dist/dom';
import './DetailPage.css';

function DetailPage(props) {
    const [pokeData, setPokeData] = useState([]);

    const params = useParams();


    useEffect = () => {
        // url ende ist die pokedex id
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.id}/`)
            .then(response => response.json)
            .then(pokeData => {
                setPokeData(PokeArray);

            });
    };[];

    console.log(pokeData);

    return (
        <section>
            <article>
                {pokeData.map((item) => {
                    return <DetailPage
                        imgURL={props.}
                        name={props.name}

                    />;
                })}
                {/* Pokemon image */}
                <img></img>
                {/* Pokemon name */}
                <p></p>
                {/* Pokemon type */}
                <p></p>
            </article>
            <article>
                {/* Pokemon describtion */}
                <h2>ATTACKS AND MOVEMENTS</h2>
                <p></p>
            </article>
        </section>
    );
};

export default DetailPage;