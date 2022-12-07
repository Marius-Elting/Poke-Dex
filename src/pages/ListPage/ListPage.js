
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

        setsearchLink(props.searchLink);
    }, [props.searchLink, searchLink]);

    useEffect(() => {


        const controller = new AbortController();
        fetch(`https://pokeapi.co/api/v2/${searchLink}`, { signal: controller.signal })
            .then(res => res.json())
            .then((res) => {
                if (props.searchLink.includes("type")) {
                    setPokeData(res.pokemon);
                    setuseAbleData(res.pokemon);


                } else if (props.searchLink.includes("pokemon")) {
                    setPokeData(res.results);
                    setuseAbleData(res.results);


                }

                return () => {
                    controller.abort();
                };
            });
        // 
    }, [props.searchLink, searchLink,]);



    useEffect(() => {
        if (PokeData === undefined) {
            return;
        }
        if (props.searchTerm === "") {
            setuseAbleData(PokeData);
        }

        // if (searchTerm === "reset") {
        //     setSearchTerm("pokemon/?limit=905&offset=0.");
        //     // setuseAbleData(PokeData);
        //     return;
        // }


        // setSearchTerm(`pokemon/${searchTerm}`);
        let lenght = (props.searchTerm).length;
        if (props.searchLink.includes("type")) {
            setuseAbleData(PokeData.filter(el => el.pokemon.name.slice(0, lenght).toLowerCase() === (props.searchTerm).toLowerCase().replaceAll(" ", "-")));

        } else if (props.searchLink.includes("pokemon")) {
            setuseAbleData(PokeData.filter(el => el.name.slice(0, lenght).toLowerCase() === (props.searchTerm).toLowerCase().replaceAll(" ", "-")));
        }
    }, [props.searchTerm]);


    if (PokeData === undefined) {

        return;
    }



    if (PokeData[0].pokemon?.name !== undefined && searchLink.includes("pokemon")) {

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
            })}<span className='showMore'>
                <button onClick={() => {
                    setsearchLimit(searchLimit + 20);
                }}>Show More</button></span>
        </div>
    );
}
export default List;