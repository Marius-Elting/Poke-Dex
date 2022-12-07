
import React, { isValidElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';


function List(props, { filtered }) {
    // const [searchterm, setSearchTerm] = useState("?limit=500&offset=0.");
    const [PokeData, setPokeData] = useState();
    const [searchTerm, setSearchTerm] = useState(props.searchterm);
    const [useAbleData, setuseAbleData] = useState();
    let searchArray = [];


    console.log(searchTerm);
    useEffect(() => {
        const controller = new AbortController();
        fetch(`https://pokeapi.co/api/v2/${searchTerm}`, { signal: controller.signal })
            .then(res => res.json())
            .then((res) => {
                if (props.searchterm.includes("type")) {
                    setPokeData(res.pokemon);
                    console.log(true);
                    setuseAbleData(res.pokemon);
                } else if (props.searchterm.includes("pokemon")) {
                    console.log(true);
                    setPokeData(res.results);
                    setuseAbleData(res.results);
                }
                console.log(res);
                return () => {
                    controller.abort();
                };
            });
    }, [props]);



    function searchPokemon(searchTerm) {
        if (PokeData === undefined) {
            return;
        }
        if (searchTerm === "") {
            setuseAbleData(PokeData);
        }
        // setSearchTerm(`pokemon/${searchTerm}`);
        let lenght = searchTerm.length;
        if (props.searchterm.includes("type")) {
            setuseAbleData(PokeData.filter(el => el.pokemon.name.slice(0, lenght).toLowerCase() === searchTerm.toLowerCase().replace(" ", "-")));

        } else if (props.searchterm.includes("pokemon")) {
            setuseAbleData(PokeData.filter(el => el.name.slice(0, lenght).toLowerCase() === searchTerm.toLowerCase().replace(" ", "-")));

        }
    }
    if (PokeData === undefined) {
        return;
    }
    console.log(searchArray);
    return (
        <div id='mDiv' className="main_Div">
            <Header page={"ListPage"} search={searchPokemon} />

            {useAbleData?.slice(0, 50).map((a, index) => {
                let name;
                let i;
                if (props.searchterm.includes("type")) {
                    name = a.pokemon.name;
                    i = a.pokemon.url.slice(-4, -1).replace("/", "").replace("n", "");
                } else if (props.searchterm.includes("pokemon")) {
                    name = a.name;
                    i = a.url.slice(-4, -1).replace("/", "").replace("n", "");
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

        </div>
    );
}
export default List;