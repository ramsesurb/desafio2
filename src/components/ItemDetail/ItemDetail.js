import React from 'react';
import ItemCounter from '../CounterButton/CounterButton';
import { useState } from "react"
import { CartContext } from '../contexts/CartProvider/CartProvider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import SpecsGuitar from '../SpecsGuitar/SpecsGuitar';
import SpecsAmp from '../SpecsAmp/SpecsAmp';
import { DetailCard } from '../DetailCard/DetailCard';





const ItemDetail = ({item}) =>{

const [cantidad, setCantidad] = useState(1)
const {addToCart, isInCart } = useContext (CartContext)

const items=(item)
const handleAdd =() =>{
const itemToCart ={
  cantidad,
  id: item.id,
  price: item.price,
  name: item.name, 
  countryOrigin: item.countryOrigin,
  rating: item.rating,
  images: item.images,
  color: item.color,
 }
  
  addToCart(itemToCart)
  
}
 
return (
<div className="container p-3 my-5 grid">
  <h1> {item.name}</h1>
  <h4>{item.category}</h4>
  <hr/>
      <div className="row">
        <div className="col-sm-8">
          <div className="d-flex justify-content-center">
          <img  src={item.images} style={{ width: '22rem' }} alt="" /> 
          </div>
          <hr/>
          <h2>Description</h2>
            <p> {item.desc} </p> 
      </div>
      <div className="col-sm-4 border-start border-opacity-25 border-dark">
        <DetailCard item={items}/>
        {
        isInCart(item.id)
        ?  <Link to="/cart"  className="btn btn-light my-2">Go to cart</Link>
        :  <ItemCounter max={item.stock} counter={cantidad} setCounter={setCantidad} handleAdd={handleAdd}/>}
      </div>
      </div>
        {(item.type === "Guitar") 
        ?<SpecsGuitar item={items}/>
        : <SpecsAmp item={items}/>
        }
        
        
      </div>
      
    
)
}

export default ItemDetail