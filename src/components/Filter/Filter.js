import { Link } from "react";
import './Filter.css';
function Filter({ filter }) {
    // console.log({ move: "out" });

    return (
        <section>
            <div>
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
            <button type="Button">Search</button>
        </section>
    );
}


export default Filter;