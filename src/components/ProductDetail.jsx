import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import cartSvg from '../img/cart.svg'
import { ItemCounter } from "../components/ItemCounter";
import { CartContext } from "../context/CartContext";

export const ProductDetail = ({product}) => {

    const { addToCart} = useContext(CartContext)


    const handleAdd = ()=>{
            addToCart(product, count)
    }

    const stock = product.stock

    const [count, setCount] = useState(1)

    const handleDecrease = ()=>{
        if(count > 1){
            setCount((prev)=> prev -1)
        }
    }
    const handleIncrease = ()=>{
        if(count < stock)
        setCount((prev)=> prev +1)
    }
    return (
      <div className="item-container" key={product.id}>
        <div className="item">
          <div className="img">
          <img src={product.imgUrl} alt={product.name} />
        </div>
        <div className="item-info">
          <Link to={`/products/${product.category}`}>
            <h6 style={{color:"black"}}>categoria: {product.category}</h6>
          </Link>
          <div>
            <h2>{product.name}</h2> 
          </div>
          <div className="item-price">
          <h3>${product.price}</h3>
          </div>
            <span> Quedan {product.stock} disponibles</span>    
          <div className="item-counter">
            <ItemCounter count={count} handleDecrease={handleDecrease} handleIncrease={handleIncrease}/>
            <div  onClick={handleAdd} className="btn-buy"><h3>agregar</h3><img src= {cartSvg}/></div>
          </div>
          </div>  
        </div>
          <div className="detail">
            <span>Descripción</span>
            <p>{product.detail}</p>
          </div>
      </div>
  );
};
