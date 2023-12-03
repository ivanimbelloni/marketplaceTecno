import React from "react";
import CardWidget from "./CartWidget"
import { NavLink } from "react-router-dom";
import data from "../data/products.json";
import Logo from "../img/TecnoMarket_logo.svg"
const categories = data.map((item) => item.category);
const uniqueCategories = new Set(categories);

function NavBar() {
  return (
    <>
    <header>
      <img src={Logo} alt="Tecno market" style={{width:"50px"}}/>
      <div className="navbar">

        <ul>
          <NavLink to="/">
            <li key="inicio">
              <span> Inicio </span>
            </li>
          </NavLink>
                {[...uniqueCategories].map(category => (
                    <NavLink to={`/products/${category}`}>
                  <li key={category}>
                        <span className="nav-link">{category}</span>
                  </li>
                    </NavLink>
                  ))}
          <NavLink to="/contacto">
          <li key="contacto">
              <span> Contacto </span>
          </li>
            </NavLink>
        </ul>
      </div>
      <CardWidget/>
    </header>
    </>

  );
}
export default NavBar;
