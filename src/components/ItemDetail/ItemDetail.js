import React from 'react';
import ItemCounter from '../CounterButton/CounterButton';
import { useState } from "react"
import { CartContext } from '../contexts/CartProvider/CartProvider';
import { useContext } from 'react';





const ItemDetail = ({item}) =>{
const [cantidad, setCantidad] = useState(1)
const {cart, setCart,addToCart, isInCart } = useContext (CartContext)
console.log(cart)

const handleAdd =() =>{
const itemToCart ={id: item.id,precio: item.price,nombre: item.name,}
  console.log(itemToCart)

  addToCart(itemToCart)
  console.log (isInCart(item.id))
}
 

  return (
    <div className="container my-5 grid">
        
              <div>
              <h1> Producto Detallado</h1>
              <hr/>
              <div className="container  p-3">
                  <div className="row">
                  <div className="col-sm-8">
                    <div className="text-center">
                   <img src={item.images} style={{ width: '18rem' }} alt="" /> 
                   </div>
                   <hr/>
                   <h2>Description</h2>
                   <p> {item.desc} </p> 
                   <h2>Specs</h2>
                   <p>Neckwood: {item.neckWood}</p>
                   <p>Fret number: {item.fretNumber}</p>
                   <p>Color : {item.color}</p>
                   <p>Country origin: {item.countryOrigin}</p>
                  </div>
                  <div className="col-sm-4 bg-dark text-light">
                    <h2> {item.name}</h2>
                    <h3>Price {item.price}</h3>
                    {
                    isInCart(item.id)
                    ?  <button  className="btn btn-light my-2">ir al carrito</button>
                    :  <ItemCounter max={item.stock} counter={cantidad} setCounter={setCantidad} handleAdd={handleAdd}/>}

                    
                    
    
                    </div>
                  </div>

              </div>
          </div>

        

    </div>
)
}

export default ItemDetail