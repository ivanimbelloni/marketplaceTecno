import React, { useContext } from 'react'
import deleteIcon from '../img/delete.svg'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export const Cart = () => {

    const {cart, cartTotalPrice, clearCart} = useContext(CartContext)

    const handleClear = ()=>{
        clearCart()
    }


  return (
        <div className="cart">
            <h2>Carrito de compras</h2>
            <div className="cart-content">
                {
                    cart.map((prod)=>(
                        <div className="cart-prod" key={prod.id}>
                            <img className='prod-img' src={prod.imgUrl} alt="" />
                            <div className="prod-info">
                                <h3>{prod.name}</h3>
                                <p>Precio Unit. : ${prod.price}</p>
                                <p>Cantidad: {prod.cant}</p>
                                <span>Total: ${prod.price * prod.cant} </span>
                            </div>
                        </div>
                    ))
                }
            </div>
    {  
            cart.length > 0 ?
            <>
            <div className="cart-low">
                <div className="btn-delete">
                    <h3  onClick={handleClear}>Vaciar </h3>
                    <img src={deleteIcon} alt="" />
                </div>
                <h2>Total: ${cartTotalPrice()} u$d</h2>
                <Link to="/checkout">
                    <div className="btn-checkout">
                        <h3>Finalizar Compra</h3>
                        </div>
                </Link>
            </div>

            </> :
            <h2>El carrito está vacío :</h2>
        }
        </div>            
  )
}
