import React from "react";
import CardWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom";
import data from "../data/products.json";
import Logo from "../img/TecnoMarket_logo.svg"
import ContactoIcon from "../img/contact.svg"
const categories = data.map((item) => item.category);
const uniqueCategories = new Set(categories);

function NavBar() {
  return (
    <>
    <header>
      <div className="navbar">
        <div className="navbar-logo">
      <Link to={'/'}>
        <img src={Logo} alt="Tecno market" style={{width:"50px"}}/>
      </Link>
        </div>
      <div className="navbar-category">
        <ul>
                {[...uniqueCategories].map(category => (
                    <NavLink to={`/products/${category}`}>
                  <li key={category}>
                        <span className="nav-link">{category}</span>
                  </li>
                    </NavLink>
                  ))}
        </ul>
      </div>
      <div className="navbar-right">
      <Link to={'/contacto'}>
        <img src={ContactoIcon} alt="Contacto" style={{width:"24px"}}/>
      </Link>
      <CardWidget/>
      </div>
      </div>
    </header>
    </>

  );
}
export default NavBar;
