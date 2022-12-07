import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/PictureCarousel/PictureCarousel';
import Header from '../../components/Header/Header';
// import { isButtonElement } from 'react-router-dom/dist/dom';


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
            <Header />
            <article className='DPa'>
                <img className='pokImage' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData.id}.png`} alt="asd"></img>
                
                <p className='types' ><strong>{("000" + (pokeData.id)).slice(-3) + "#"}</strong></p>
                {/* <h2 className='Ptypes'>POKEMON TYPES</h2> */}
                <section className='typesX'>{pokeData?.types.map((item) => {
                    return (
                      
                            <div id='Q' className={`${item.type.name}`}> {item.type.name.toUpperCase()}</div>
                      
                    );
                })}</section>
                <Carousel data={pokeData} />
            </article>
            <article>
                <h2 className='types'> ABILITY</h2>
                <section className='typesXY'>{pokeData?.abilities.map((item) => {
                    return (
                    
                            <div id='Z'>{item.ability.name.toUpperCase()}</div>
                    
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


