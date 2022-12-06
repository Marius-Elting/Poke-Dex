import { Link } from "react";
import './Filter.css';
import Bild from '../img/Vector.png';
function Filter({ }) {
    // console.log({ move: "out" });

    function filter(a) {
        // console.log(a);
    }
    return (
        <section> 
            <span className="bilder">
                      <img className="pk2" src={"https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png"} alt="Pokemon Logo"></img> 
                      <img className="pk3" src={Bild} alt="X Logo"></img>
                      </span>
             <h1 className="types">Types</h1>
            <div className="filter_w">
              
                <button onClick={filter("bug")}>Bug</button>
                <button onClick={filter("dark")}>Dark</button>
                <button onClick={filter("dragon")}>Dragon</button>
                <button onClick={filter("electric")}>Electric</button>
                <button onClick={filter("fairy")}>Fairy</button>
                <button onClick={filter("fighting")}>Fighting</button>
                <button onClick={filter("fire")}>Fire</button>
                <button onClick={filter("flying")}>Flying</button>
                <button onClick={filter("ghost")}>Ghost</button>
                <button onClick={filter("grass")}>Grass</button>
                <button onClick={filter("ground")}>Ground</button>
                <button onClick={filter("ice")}>Ice</button>
                <button onClick={filter("normal")}>Normal</button>
                <button onClick={filter("plant")}>Plant</button>
                <button onClick={filter("poison")}>poison</button>
                <button onClick={filter("psychic")}>psychic</button>
                <button onClick={filter("rock")}>rock</button>
                <button onClick={filter("steel")}>steel</button>
                <button onClick={filter("water")}>water</button>
            </div>
            <button className="s" type="Button">Search</button>
        </section>
    );
}


export default Filter;