// import {  } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Dpk from '../img/Dpk.png';
import Lpk from '../img/Lpk-50.png';
import Reset from"../img/reset.png"
import Dark from"../img/dark.png"
import Light from"../img/light.png"
import Filter from "../Filter/Filter";



function Header(props) {

    const searchRef = useRef();
    const filterRef = useRef();
    const params = useParams();
    const [filterMenu, setFilterMenu] = useState();
    const [DL , setDL] = useState(Light); 
    const [Burger , setBurger] = useState(Lpk);
    let el = document.getElementsByClassName('map_div');
    const toggleTheme = () => {
        if (DL === Light) {
            document.body.className = "dark";
            Array.from(el).forEach((element)=>{
             element.style.background ="linear-gradient(52.41deg, #BFDFFF 4.87%, #001224 94.37%)"            })
        setDL(Dark);
        setBurger(Dpk)
        } else {
        setDL(Light);
        setBurger(Lpk)
        document.body.className = "light";
        Array.from(el).forEach((element)=>{
            element.style.background ="linear-gradient(52.41deg, #FFE1C6 4.87%, #FFCB05 94.37%)"            })

        
        }
        };

    return (
        <header>
            <img className="pk" src={"https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png"} alt="Pokemon Logo"></img>
            <nav>
                <Link to="/filter" className="btn_img_burger"><button className="button" type="button">{props.page !== "ListPage" ? "NIX" : <img  src={Burger} className="burgerimg" alt="burgerMenu" ></img>}</button></Link>
                <input onChange={(e) => props.search(e.target.value)} placeholder="Search Pokemon" Ref={searchRef}></input>
                <span className="button_wrapper">
                <button  onClick={() => Filter(NaN)}>
                <img className="btn_reset" src={Reset} alt="Filter reset"></img>
                </button>
                <button type="button" onClick={toggleTheme} ><img className="btn_LD" src={DL} alt="DarkMode"></img></button>
                </span>
                {filterMenu}
            </nav>
        </header>
    );
}


export default Header;