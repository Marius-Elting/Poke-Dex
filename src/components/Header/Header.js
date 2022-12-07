// import {  } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import BurgerImg from './burger.png';
import './Header.css';
import Filter from "../Filter/Filter";



function Header(props) {
    const searchRef = useRef();
    const filterRef = useRef();
    const params = useParams();
    const [filterMenu, setFilterMenu] = useState();


    return (
        <header>
            <img className="pk" src={"https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png"} alt="Pokemon Logo"></img>
            <nav>
                <Link to="/filter"><button className="button" type="button">{props.page !== "ListPage" ? "NIX" : <img src={BurgerImg} className="burgerimg" alt="burgerMenu" ></img>}</button></Link>
                <input onChange={(e) => props.search(e.target.value)} placeholder="Search Pokemon" Ref={searchRef}></input>
                <span className="button_wrapper">
                <button type="button">Reset Filter</button>
                 <button type="button">Darkmode</button></span>
                {filterMenu}
            </nav>
        </header>
    );
}


export default Header;