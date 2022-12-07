
import React, { isValidElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import "./ListPage.css";

function List(props, { filtered }) {
    // const [searchterm, setSearchTerm] = useState("?limit=500&offset=0.");
    const [PokeData, setPokeData] = useState();
    const [searchTerm, setSearchTerm] = useState(props.searchterm);
    const [searchLimit, setsearchLimit] = useState(50);
    const [useAbleData, setuseAbleData] = useState();
    console.log(PokeData);

    function reset() {
        setSearchTerm("pokemon/?limit=905&offset=0.");
    }

    console.log("es wird geladen");
    useEffect(() => {
        const controller = new AbortController();
        console.log("ich bin im useEffect");
        fetch(`https://pokeapi.co/api/v2/${searchTerm}`, { signal: controller.signal })
            .then(res => res.json())
            .then((res) => {
                if (props.searchterm.includes("type")) {
                    setPokeData(res.pokemon);
                    console.log(res);
                    console.log("type");
                    setuseAbleData(res.pokemon);
                } else if (props.searchterm.includes("pokemon")) {
                    console.log("pokemon");
                    setPokeData(res.results);
                    setuseAbleData(res.results);
                }
                console.log(res);

                return () => {
                    controller.abort();
                };
            });
        console.log(PokeData);
    }, [searchTerm, props]);


    console.log(PokeData);

    function searchPokemon(searchTerm) {
        console.log(searchTerm);
        if (PokeData === undefined) {
            return;
        }
        if (searchTerm === "") {
            setuseAbleData(PokeData);
        }
        if (searchTerm === "reset") {
            setSearchTerm("pokemon/?limit=905&offset=0.");
            // setuseAbleData(PokeData);
            return;
        }
        console.log(PokeData);
        // setSearchTerm(`pokemon/${searchTerm}`);
        let lenght = searchTerm.length;
        if (props.searchterm.includes("type")) {
            setuseAbleData(PokeData.filter(el => el.pokemon.name.slice(0, lenght).toLowerCase() === searchTerm.toLowerCase().replace(" ", "-")));

        } else if (props.searchterm.includes("pokemon")) {
            setuseAbleData(PokeData.filter(el => el.name.slice(0, lenght).toLowerCase() === searchTerm.toLowerCase().replace(" ", "-")));

        }
    }
    console.log("B");
    if (PokeData === undefined) {
        return;
    }
    return (
        <div className="main_Div">
            <Header page={"ListPage"} search={searchPokemon} resetButton={reset} />

            {useAbleData?.slice(0, searchLimit).map((a, index) => {
                console.log("ich stehe im mapo");
                let name;
                let i;
                if (props.searchterm.includes("type")) {
                    name = a.pokemon.name;
                    i = a.pokemon.url.slice(-6, -1).replace("/", "").replace("n", "").replace("o", "").replace("m", "");
                } else if (props.searchterm.includes("pokemon")) {
                    name = a.name;
                    i = a.url.slice(-6, -1).replace("/", "").replace("n", "").replace("o", "").replace("m", "");
                }
                if (i > 905) {
                    return;
                }

                return (
                    <Link to={`/pokemon/${i}`} key={index} className='map_div'>
                        <img className='PokeImg' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`} alt='POKEimg'></img>
                        <span className='ueber_num_Name'>

                            <p className='num_name'> {name.toUpperCase()} </p>
                            <p className='num_name'> {("000" + (i)).slice(-3) + "#"} </p>
                        </span>
                    </Link>
                );
            })}
            <button onClick={() => {
                setsearchLimit(searchLimit + 20);
            }}>Show More</button>
        </div>
    );
}
export default List;