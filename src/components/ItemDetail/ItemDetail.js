import React from 'react';
import ItemCounter from '../CounterButton/CounterButton';
import { useState } from "react"
import { CartContext } from '../contexts/CartProvider/CartProvider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) =>{
const [cantidad, setCantidad] = useState(1)
const {cart ,addToCart, isInCart } = useContext (CartContext)



const handleAdd =() =>{
const itemToCart ={cantidad, id: item.id,countryOrigin: item.countryOrigin, rating: item.rating, price: item.price, name: item.name, images: item.images,isTopSeller:item.isTopSeller,color: item.color, }
  

  addToCart(itemToCart)
  
}
 
return (
<div className="container my-5 grid">
      
  <div>
  <h1> Detailed Product</h1>
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
        <h3>Price ${item.price}</h3>
        {
        isInCart(item.id)
        ?  <Link to="/cart"  className="btn btn-light my-2">Go to cart</Link>
        :  <ItemCounter max={item.stock} counter={cantidad} setCounter={setCantidad} handleAdd={handleAdd}/>}
      </div>
      </div>
      </div>
      </div>
    </div>
)
}

export default ItemDetail