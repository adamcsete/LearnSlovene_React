import Hamburger_icon from "./images/Hamburger_icon.png";
import "./Menu.css";
import { Link } from 'react-router-dom';
import React from 'react';

function Menu(){
    return (
        <div className = "menuBar">
            <p className = "p">Tanuljunk szlovénül</p>
            <div className="dropdown">
                <img className="dropDownImg" src={Hamburger_icon} alt="Menu icon"></img>
                <div className="dropdown-content">
                            <Link className="menuLink" to="/">Kezdőlap</Link>
                            <Link className="menuLink" to="/Lessons">Leckék</Link>
                            <Link className="menuLink" to="/Grammar">Nyelvtan</Link>
                            <Link className="menuLink" to="/A1">A1</Link>
                            <Link className="menuLink" to="/A2">A2</Link>
                </div>
            </div>
        </div>
    );
}

export default Menu;