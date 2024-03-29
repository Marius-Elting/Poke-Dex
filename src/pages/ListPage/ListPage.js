import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import german from '../../German JSON.json';

function List(props) {
    const [PokeData, setPokeData] = useState();
    const [searchLink, setsearchLink] = useState(props.searchLink);
    const [searchLimit, setsearchLimit] = useState(50);
    const [useAbleData, setuseAbleData] = useState();
    const reggex = /(mon|on|n|)[/]/g

    useEffect(() => {
        setsearchLink(props.searchLink);
    }, [props.searchLink, searchLink]);

    useEffect(() => {
        const controller = new AbortController();
        props.setSearchTerm("")
        fetch(`https://pokeapi.co/api/v2/${searchLink}`, { signal: controller.signal })
            .then(res => res.json())
            .then((res) => {
                if (props.searchLink.includes("type")) {
                    const cleanedData = []
                    res.pokemon.forEach((item, index) => {
                        item.i = item.pokemon.url.slice(-6, -1).replace(reggex, "");
                        if (item.i > 905) return
                        else cleanedData.push(item)
                    })
                    console.log(cleanedData)
                    setPokeData(cleanedData);
                    setuseAbleData(cleanedData)
                } else if (props.searchLink.includes("pokemon")) {
                    const cleanedData = []
                    res.results.forEach((item, index) => {
                        item.i = item.url.slice(-6, -1).replace(reggex, "")
                        if (item.url === undefined || item.i > 905) return
                        else cleanedData.push(item)
                    })
                    setPokeData(cleanedData);
                    setuseAbleData(cleanedData);
                }

                return () => {
                    controller.abort();
                };
            });
    }, [props.searchLink, searchLink,]);



    useEffect(() => {
        if (PokeData === undefined) return;

        if (props.searchTerm === "") setuseAbleData(PokeData);

        if (PokeData[0].pokemon?.name !== undefined && props.searchLink.includes("pokemon")) return;
        let length = (props.searchTerm).length;
        if (props.searchLink.includes("type")) {
            setuseAbleData(PokeData.filter((el, i) =>
                el.pokemon.name.slice(0, length).toLowerCase() ===
                (props.searchTerm).toLowerCase().replaceAll(" ", "-") ||
                german[el.i - 1]?.name.slice(0, length).toLowerCase() ===
                (props.searchTerm).toLowerCase().replaceAll(" ", "-")

            ));

        } else if (props.searchLink.includes("pokemon")) {
            setuseAbleData(PokeData.filter((el, i) =>
                el.name.slice(0, length).toLowerCase() ===
                (props.searchTerm).toLowerCase().replaceAll(" ", "-") ||
                german[i].name.slice(0, length).toLowerCase() ===
                (props.searchTerm).toLowerCase().replaceAll(" ", "-")));
        }

    }, [props.searchTerm, PokeData, props.searchLink]);


    // if () return;

    if (PokeData === undefined || (PokeData[0].pokemon?.name !== undefined && (searchLink.includes("pokemon") || props.searchLink.includes("pokemon")))) return;
    console.log(props.language)
    return (

        <div className="main_Div">
            {useAbleData?.slice(0, searchLimit).map((item, index) => {
                let name;
                if (props.searchLink.includes("type")) {
                    name = item.pokemon.name;
                    if (item.i <= 905 && props.language === "German") {
                        name = german[item.i - 1].name;
                    }
                } else if (props.searchLink.includes("pokemon")) {

                    name = item.name
                    if (item.i <= 905 && props.language === "German") {
                        name = german[item.i - 1].name;
                    }
                }
                return (
                    <Link to={`/pokemon/${item.i}`} key={index} className={`map_div ${props.darkmode ? "darkM" : "LightM"}`}>
                        <img className='PokeImg' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.i}.png`} alt='POKEimg'></img>
                        <span className='ueber_num_Name'>
                            <p className='num_name'> {name.toUpperCase()} </p>
                            <p className='num_name'> {("000" + (item.i)).slice(-3) + "#"} </p>
                        </span>
                    </Link>
                );
            })}
            {useAbleData.length > searchLimit &&
                <div className='showMore'>
                    <button onClick={() => {
                        setsearchLimit(searchLimit + 20);
                    }}>Show More</button>
                </div>
            }

        </div>
    );
}
export default List;