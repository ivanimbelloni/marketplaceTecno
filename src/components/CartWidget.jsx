import React, { useContext, useState } from 'react'
import cartSvg from '../img/cart.svg'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const {cartCant} = useContext(CartContext)

    return(  
            <Link style={{textDecoration:"none"}} to={'/cart'}>       
                <div className="cart-widget" >
                    <img src={cartSvg} alt="carrito" />
                 <div className="cart-widget-cant">
                    <p>
                        {cartCant()}
                    </p>
                 </div>
             </div>
            </Link>  
    )
    }
export default CartWidget

