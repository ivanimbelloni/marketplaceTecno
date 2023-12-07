import React from 'react'
import { NavLink } from 'react-router-dom'
export const NavBarCategories = () => {


  return (
    <div className='navbar-category'>
          <ul>
                <NavLink to={"/products/iphone"}>
                  <li><span>Iphone</span></li>
                </NavLink>
                <NavLink to={"/products/ipad"}>
                  <li><span>Ipad</span></li>
                </NavLink>
                <NavLink to={"/products/macbook"}>
                  <li><span>Macbook</span></li>
                </NavLink>
        </ul>
    </div>
  )
}
