import { createContext, useEffect, useState } from "react";


 export const CartContext = createContext ()



 export const CartProvider = ({children}) =>{

    const [cart,setCart] =useState ([])
    const addToCart =(item) =>{setCart ([...cart,item])}
    const isInCart =(id) =>{ return cart.some ((item)=> item.id ===id)}
    useEffect(() => {localStorage.setItem('carrito', JSON.stringify(cart))}, [cart])

    return (
        <CartContext.Provider value ={{
            cart,
            addToCart,
            isInCart,
          }}>
            {children}
        </CartContext.Provider>
    )
 }
 