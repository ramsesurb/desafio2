import { createContext, useEffect, useState,useContext } from "react";


 export const CartContext = createContext ()


 const init = JSON.parse(localStorage.getItem('carrito')) || []
 
 export const CartProvider = ({children}) =>{

    const [cart,setCart] =useState (init)
    const addToCart =(item) =>{setCart ([...cart,item])}
    const isInCart =(id) =>{ return cart.some ((item)=> item.id ===id)}
    const removeItem = (id) => {setCart( cart.filter((item) => item.id !== id) )}
    const cartQuantity = () => {return cart.reduce((acc, item) => acc + item.cantidad, 0)}
    const emptyCart =() => {return setCart([])}
    const cartTotal =()=> {return cart.reduce ((acc,item) => acc+ item.cantidad * item.price, 0)}
    useEffect(() => {localStorage.setItem('carrito', JSON.stringify(cart))}, [cart])

    return (
        <CartContext.Provider value ={{
            cart,
            addToCart,
            isInCart,
            removeItem,
            cartQuantity,
            emptyCart,
            cartTotal
          }}>
            {children}
        </CartContext.Provider>
    )
 }
 
 export const useCartContext = () => {
  return useContext(CartContext)
}