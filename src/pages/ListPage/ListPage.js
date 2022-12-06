
import React, { useEffect, useState } from 'react';
import "./ListPage.css";
function List() {
    const [searchterm, setSearchTerm] = useState("?limit=500&offset=0.");
    const [PokeData, setPokeData] = useState();
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchterm}`)
            .then(res => res.json())
            .then((res) => {
                setPokeData(res);

            });
    }, []);
    return (
        <div className="main_Div">

            {PokeData?.results?.slice(0, 50).map((a, index) => {
                return (
                    <div key={index} className='map_div'>
                        <img className='PokeImg' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`} alt='POKEimg'></img>
                        <span className='ueber_num_Name'>
                            <p className='num_name'> {a.name.toUpperCase()} </p>
                            <p className='num_name'> {("000" + (index + 1)).slice(-3) + "#"} </p>
                        </span>
                    </div>
                );
            })}

        </div>
    );
}
export default List;