import Slovene_flag from "./images/Flag_of_Slovenia.png";
import "./Menu.css";
import { Link } from 'react-router-dom';
import React, {useState} from 'react';

/* minta: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav */

function Menu(){
    let [widthParam, setWidth] = useState("250px");
    let [displayParam, setDisplay] = useState("none");

    /* Set the width of the side navigation to 250px */
    const openNav = () => {setWidth("25vw")}

    /* Set the width of the side navigation to 0 */
    const closeNav = () => {setWidth("0px")}

    const showLesson = () => {setDisplay("block")}

    let sidenav = {width: widthParam}
    let lessonhide = {display: displayParam}

    return (
        <div className = "menuBar"> 
            <span style={{fontSize: "30px", cursor: "pointer"}} onClick={openNav}>&#9776;</span>
            <span><img className="flagSlo" src={Slovene_flag} alt="Flag of Slovenia"></img></span>
            <div className="sidenav" style={sidenav}>
                <button className="closebtn" onClick={closeNav}>&times;</button>
                <Link className="menuLink" to="/">Kezdőlap</Link>
                <Link className="menuLink" to="/Lessons">Leckék</Link>
                <Link className="menuLink" to="/Grammar">Nyelvtan</Link>
                <Link className="menuLink" to="/A1">A1</Link>    
                <Link className="menuLink" to="/A1_1"><span className="lessonLink" onMouseOver={lessonhide}>A1 - 1. lecke</span></Link>
                <Link className="menuLink" to="/A1_2"><span className="lessonLink" onMouseOver={lessonhide}>A1 - 2. lecke</span></Link>
                <Link className="menuLink" to="/A2">A2</Link>
                <Link className="menuLink" to="/A2_1"><span className="lessonLink" onMouseOver={lessonhide}>A2 - 1. lecke</span></Link>
                <Link className="menuLink" to="/A2_2"><span className="lessonLink" onMouseOver={lessonhide}>A2 - 2. lecke</span></Link>
            </div>
            
            
        </div>
    );
}

export default Menu;