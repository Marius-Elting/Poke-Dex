
import React, { isValidElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';


function List(props) {
    // const [searchterm, setSearchTerm] = useState("?limit=500&offset=0.");
    const [PokeData, setPokeData] = useState();
    const [searchLink, setsearchLink] = useState(props.searchLink);
    const [searchTerm, setSearchTerm] = useState(props.searchTerm);
    const [searchLimit, setsearchLimit] = useState(50);
    const [useAbleData, setuseAbleData] = useState();

    console.log(searchLink);
    console.log(props.searchLink);

    useEffect(() => {
        console.log("effekt1");
        setsearchLink(props.searchLink);
    }, [props.searchLink, searchLink]);

    useEffect(() => {
        console.log("jetzt wird gefeched");
        console.log(searchLink);
        const controller = new AbortController();
        fetch(`https://pokeapi.co/api/v2/${searchLink}`, { signal: controller.signal })
            .then(res => res.json())
            .then((res) => {
                if (props.searchLink.includes("type")) {
                    setPokeData(res.pokemon);
                    setuseAbleData(res.pokemon);
                    console.log("newfetch type");
                    console.log(res);
                } else if (props.searchLink.includes("pokemon")) {
                    setPokeData(res.results);
                    setuseAbleData(res.results);
                    console.log("newfetch Poke");
                    console.log(res);
                }

                return () => {
                    controller.abort();
                };
            });
        // console.log(PokeData);
    }, [props.searchLink, searchLink,]);



    useEffect(() => {
        if (PokeData === undefined) {
            return;
        }
        if (props.searchTerm === "") {
            setuseAbleData(PokeData);
        }
        console.log(props.searchTerm);
        // if (searchTerm === "reset") {
        //     setSearchTerm("pokemon/?limit=905&offset=0.");
        //     // setuseAbleData(PokeData);
        //     return;
        // }

        console.log(PokeData);
        // setSearchTerm(`pokemon/${searchTerm}`);
        let lenght = (props.searchTerm).length;
        if (props.searchLink.includes("type")) {
            setuseAbleData(PokeData.filter(el => el.pokemon.name.slice(0, lenght).toLowerCase() === (props.searchTerm).toLowerCase().replaceAll(" ", "-")));

        } else if (props.searchLink.includes("pokemon")) {
            setuseAbleData(PokeData.filter(el => el.name.slice(0, lenght).toLowerCase() === (props.searchTerm).toLowerCase().replaceAll(" ", "-")));
        }
    }, [props.searchTerm]);


    if (PokeData === undefined) {
        console.log("A is undefined");
        return;
    }
    console.log(PokeData[0].name);
    console.log(props.searchLink.includes("pokemon"));
    console.log(PokeData);
    if (PokeData[0].pokemon?.name !== undefined && searchLink.includes("pokemon")) {
        console.log("B is undefined");
        return;
    }

    // if (PokeData[0].name === undefined) {

    // }

    return (

        <div className="main_Div">
            {useAbleData?.slice(0, searchLimit).map((a, index) => {
                let name;
                let i;
                let c;
                {/* console.log(a); */ }
                if (props.searchLink.includes("type")) {
                    name = a.pokemon.name;
                    i = a.pokemon.url.slice(-6, -1).replace("/", "").replace("n", "").replace("o", "").replace("m", "");
                } else if (props.searchLink.includes("pokemon")) {
                    if (a.url === undefined) {
                        return;
                    }
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