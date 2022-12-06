
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import "./ListPage.css";
function List(props) {
    const [searchterm, setSearchTerm] = useState("?limit=500&offset=0.");
    const [PokeData, setPokeData] = useState();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.searchterm}`)
            .then(res => res.json())
            .then((res) => {
                setPokeData(res);

            });
    }, [props]);

    return (
        <div className="main_Div">
            <Header page={"ListPage"} />

            {PokeData?.results?.slice(0, 50).map((a, index) => {
                return (
                    <div key={index} className='map_div'>
                        <img className='PokeImg' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`} alt='POKEimg'></img>
                        <span className='ueber_num_Name'>

                        <p className='num_name'> {a.name.toUpperCase()} </p>
                        <p className='num_name'> {("000" + (index + 1)).slice(-4) + "#"} </p>

</span>

                    </div>
                );
            })}

        </div>
    );
}
export default List;