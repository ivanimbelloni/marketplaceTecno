import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ( {product, id} ) => {
  return (
            <div className="card" key={id} id={id}>
                <img src={product.imgUrl} alt={product.name} style={{width:"300px"}}/>
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                    <Link to={`/${product.id}`}>
                        <div className="btn">
                            Comprar
                        </div>
                    </Link>
            </div>
        )
    }

