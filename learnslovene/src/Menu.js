import Slovene_flag from "./images/Flag_of_Slovenia.png";
import "./Menu.css";
import { Link } from 'react-router-dom';
import React from 'react';

/* minta: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav */

function Menu(){
    return (
        <div className = "menuBar">
            <img className="flagSlo" src={Slovene_flag} alt="Flag of Slovenia"></img>
            <div key={"mySidenav"} className="sidenav">
            <a href="#" className="closebtn" onclick={closeNav()}>&times;</a>
                <Link className="menuLink" to="/">Kezdőlap</Link>
                <Link className="menuLink" to="/Lessons">Leckék</Link>
                <Link className="menuLink" to="/Grammar">Nyelvtan</Link>
                <Link className="menuLink" to="/A1">A1</Link>
                <Link className="menuLink" to="/A2">A2</Link>    
            </div>
            <span style={styles.span} onclick={openNav()}>&#9776; open</span>
        </div>
    );
}

/* Set the width of the side navigation to 250px */
const openNav = () => {
    (mySidenav).style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
const closeNav = () => {
    "azonosító".style.width = "0";
}

const styles = {
    span: {
        size: 30
    }
}

export default Menu;