// import {  } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

import BurgerImg from './burger.png';
import './Header.css';
import Filter from "../Filter/Filter";



function Header() {
    const searchRef = useRef();
    const filterRef = useRef();
    const [leftButton, setLeftButton] = useState(<img src={BurgerImg} className="burgerimg" alt="burgerMenu" ></img>);
    const params = useParams();
    const [filterMenu, setFilterMenu] = useState();

    return (
        <header>
            <img className="pk" src={"https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png"} alt="Pokemon Logo"></img>
            <nav>
                <button onClick={() => {
                    setFilterMenu(<Filter />);
                }}
                type="button">
                    {params.id === "Home" ? "NIX" : 
                    <img src={BurgerImg} className="burgerimg" alt="burgerMenu" ></img>}
                    </button>
                <input placeholder="Search Pokemon" Ref={searchRef}></input>
                <button type="button">Darkmode</button>
                {filterMenu}
            </nav>
        </header>
    );
}


export default Header;