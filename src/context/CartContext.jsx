import {createContext, useEffect, useState} from 'react'

export const CartContext = createContext() 

const saveCart = JSON.parse(localStorage.getItem("cart")) 
export const CartProvider = ({children}) => {

    
    const [cart, setCart] = useState(saveCart)
    const addToCart = (prod, cant) => {
        const addProd = {...prod, cant}

        const newCart = [...cart]
        const prodInCart = newCart.find((prod) => prod.id === addProd.id)

        if (prodInCart){
            prodInCart.cant += cant
        }
        else {
            newCart.push(addProd)
        }
        setCart(newCart)
    }

    const cartCant = ()=> {
        return cart.reduce(( acc, prod ) => acc + prod.cant, 0)
    }

    const cartTotalPrice = () =>{
        return cart.reduce((acc , prod) => acc + prod.price * prod.cant, 0)
    }

    const clearCart = () =>{
        setCart([])
    }

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            cartCant,
            cartTotalPrice,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}