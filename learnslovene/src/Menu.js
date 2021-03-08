import Slovene_flag from "./images/Flag_of_Slovenia.png";
import "./Menu.css";
import { Link } from 'react-router-dom';
import React, {useState} from 'react';

function Menu(){
    let [widthParam, setWidth] = useState("0px");

    /* Set the width of the side navigation to 10vw */
    const openNav = () => {
        setWidth("10vw");
    }

    /* Set the width of the side navigation to 0 */
    const closeNav = () => {
        setWidth("0px");
    }

    let sidenav = {
        width: widthParam,
    }

    return (
        <div className = "menuBar"> 
            <span className = "hamburger" style={{fontSize: "30px", cursor: "pointer"}} onClick={openNav}>&#9776;</span>
            <span><img className="flagSlo" src={Slovene_flag} alt="Flag of Slovenia"></img></span>
            <div className="sidenav" style={sidenav}>
                <span className="closebtn" style={{fontSize: "30px", cursor: "pointer"}} onClick={closeNav}>&times;</span>
                <Link className="menuLink" onClick={closeNav} to="/">Kezdőlap</Link>
                <Link className="menuLink" onClick={closeNav} to="/Lessons">Leckék</Link>
                <Link className="menuLink" onClick={closeNav} to="/Grammar">Nyelvtan</Link>
                <Link className="menuLink" onClick={closeNav} to="/A1">A1</Link>    
                <Link className="lessonLink" onClick={closeNav} to="/A1/A1_1">A1 - 1. lecke</Link>
                <Link className="lessonLink" onClick={closeNav} to="/A1/A1_2">A1 - 2. lecke</Link>
                <Link className="menuLink" onClick={closeNav} to="/A2">A2</Link>
                <Link className="lessonLink" onClick={closeNav} to="/A2/A2_1">A2 - 1. lecke</Link>
                <Link className="lessonLink" onClick={closeNav} to="/A2/A2_2">A2 - 2. lecke</Link>
            </div>    
        </div>
    );
}

export default Menu;