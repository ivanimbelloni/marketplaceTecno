import React from "react";
import CardWidget from "./CartWidget";
import { Link } from "react-router-dom";
import Logo from "../img/TecnoMarket_logo.svg";
import ContactoIcon from "../img/contact.svg";
import MenuIcon from "../img/menu_icon.svg";
import CloseIcon from "../img/close_icon.svg";
import { NavBarCategories } from "./NavBarCategories";

function NavBar() {
  const displayMenu = ()=>{
    document.getElementById("side-menu").style.display="block"
  }

  const closeMenu = ()=>{
    document.getElementById("side-menu").style.display="none"
  }

  return (
    <>
      <header>
        <div className="container">

        <div onClick={displayMenu} className="menu-nav">
          <img src={MenuIcon} alt="" />
        </div>
        <div className="header-logo">
          <Link to={"/"}>
            <img src={Logo} alt="Tecno market" style={{ width: "50px" }} />
          </Link>
        </div>
          <div className="navbar">
            <NavBarCategories />
              <Link to={"/contacto"}>
                <img
                  src={ContactoIcon}
                  alt="Contacto"
                />
              </Link>
          </div>
            <CardWidget />
        </div>
      <div className="side-menu" id="side-menu">
        <div className="navbar-side">
          <div onClick={closeMenu} className="btn-close">
            <img src={CloseIcon} alt="" />
          </div>
        <ul>
          <Link to={"/"}>
            <li>
              <span>Inicio</span>
            </li>
          </Link>
          <NavBarCategories/>
          <Link to={"/contacto"}>
          <li>
            <span>Contacto</span>
          </li>
          </Link>

        </ul>
        </div>
      </div>
      </header>
    
    </>
  );
}
export default NavBar;
