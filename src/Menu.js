import Hamburger_icon from "./images/Hamburger_icon.png";
import "./Menu.css";
import { Link } from 'react-router-dom';
import React from 'react';

function Menu(){
    return (
        <div className = "menuBar">
            <p>Tanuljunk szlovénül</p>
            <div className="dropdown">
                <img className="dropDownImg" src={Hamburger_icon} alt="Menu icon"></img>
                <div className="dropdown-content">
                            <Link to="/"><a>Kezdőlap</a></Link><br/>
                            <Link to="/Lessons"><a>Leckék</a></Link><br/>
                            <Link to="/Grammar"><a>Nyelvtan</a></Link>
                </div>
            </div>
        </div>
    );
}

export default Menu;