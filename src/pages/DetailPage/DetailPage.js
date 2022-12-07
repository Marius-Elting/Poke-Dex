import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/PictureCarousel/PictureCarousel';
import Header from '../../components/Header/Header';
// import { isButtonElement } from 'react-router-dom/dist/dom';


function DetailPage() {
    const [pokeData, setPokeData] = useState();
    const [sonderData, setsonderData] = useState();
    const params = useParams();

    useEffect(() => {
        // url ende ist die pokedex id
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
            .then(response => response.json())
            .then((pokeData) => {
                setPokeData(pokeData);
                console.log(pokeData);
            });
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        console.log("ich bin im useEffect");
        fetch(`https://pokeapi.co/api/v2/${"pokemon/?limit=100000&offset=0."}`, { signal: controller.signal })
            .then(res => res.json())
            .then((res) => {

                setsonderData(res.results);

                console.log(res);

                return () => {
                    controller.abort();
                };
            });
    }, []);

    if (pokeData === undefined || sonderData === undefined) {
        return;
    }
    let lenght = (pokeData.name).length;
    let array = [];

    array.push(sonderData.filter(el => el.name.slice(0, lenght).toLowerCase() === pokeData.name.toLowerCase()));



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
    );
};

export default DetailPage;


