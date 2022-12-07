import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { isButtonElement } from 'react-router-dom/dist/dom';


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
                <img src={pokeData?.sprites?.other.dream_world.front_default}></img>
                <p>{("000" + (pokeData.id)).slice(-3) + "#"}</p>
                <p></p>
                {/* Pokemon type
                <p></p>
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