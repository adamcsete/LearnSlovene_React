import Slovene_flag from "./images/Flag_of_Slovenia.png";
import "./styles/Menu.css";
import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import MenuContent from './MenuContent';

function Menu(){
    let [widthParam, setWidth] = useState("0px");

    /* Set the width of the side navigation to 10vw */
    const openNav = () => {
        setWidth("200px");
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
            <div className = "hamburger" style={{fontSize: "30px", cursor: "pointer"}} onClick={openNav}>&#9776;</div>
            <img className="flagSlo" src={Slovene_flag} alt="Flag of Slovenia"></img>
            <div className="sidenav" style={sidenav}>
                <span className="closebtn" style={{fontSize: "30px", cursor: "pointer"}} onClick={closeNav}>&times;</span>
                {MenuContent.map((item, index) => {
                    return (
                        <ul>
                            <li className="noBullets" key={index} >
                                <Link className={item.className} to={item.path} onClick={closeNav}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        </ul>
                    )
                })}
            </div>    
        </div>
    );
}

export default Menu;