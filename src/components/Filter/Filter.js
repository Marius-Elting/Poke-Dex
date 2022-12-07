import { Link } from "react-router-dom";
import './Filter.css';

import Bild from '../img/Vector.png';


function Filter({ filter }) {
    // console.log({ move: "out" });
    console.log("load");
    return (
        <section>
            <span className="bilder">
                <img className="pk2" src={"https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png"} alt="Pokemon Logo"></img>
                <Link onClick={() => filter("pokemon/?limit=905&offset=0.")} to="/"><img className="pk3" src={Bild} alt="X Logo"></img></Link>
            </span>
            <h1 className="types">Types</h1>
            <div className="filter_w">
                <button onClick={() => filter("type/bug")}>Bug</button>
                <button onClick={() => filter("type/dark")}>Dark</button>
                <button onClick={() => filter("type/dragon")}>Dragon</button>
                <button onClick={() => filter("type/electric")}>Electric</button>
                <button onClick={() => filter("type/fairy")}>Fairy</button>
                <button onClick={() => filter("type/fighting")}>Fighting</button>
                <button onClick={() => filter("type/fire")}>Fire</button>
                <button onClick={() => filter("type/flying")}>Flying</button>
                <button onClick={() => filter("type/ghost")}>Ghost</button>
                <button onClick={() => filter("type/grass")}>Grass</button>
                <button onClick={() => filter("type/ground")}>Ground</button>
                <button onClick={() => filter("type/ice")}>Ice</button>
                <button onClick={() => filter("type/normal")}>Normal</button>
                <button onClick={() => filter("type/plant")}>Plant</button>
                <button onClick={() => filter("type/poison")}>poison</button>
                <button onClick={() => filter("type/psychic")}>psychic</button>
                <button onClick={() => filter("type/rock")}>rock</button>
                <button onClick={() => filter("type/steel")}>steel</button>
                <button onClick={() => filter("type/water")}>water</button>
            </div>
            <Link to="/"><button className="s" type="Button">Search</button></Link>
        </section>
    );
}

export default Filter;