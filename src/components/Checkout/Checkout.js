import { useState } from 'react'
import { useCartContext } from '../contexts/CartProvider/CartProvider'
import {addDoc, collection} from "firebase/firestore"
import { db } from '../../Firebase/Firestore'
import { Navigate } from "react-router-dom"

export const Checkout = () => {

    const {cart,cartTotal,finishShopping} =useCartContext ()

    const [values, setValues] =useState ({
        name: "",
        email:"",
        address:"",
    })
    
    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = async (e)  =>{
        e.preventDefault()
        const checkoutOrder ={
            comprador: values,
            item: cart,
            total:cartTotal(),

        }
        

        const ordenesRef = collection(db,'Ordenes')

        addDoc(ordenesRef,checkoutOrder)
            .then((doc) => {console.log(doc.id) 
            finishShopping(doc.id)})
            
            
    }
    if (cart.length === 0) {
        return <Navigate to="/"/>
    }       
return (
<div className='container my-5'>
<h3>Checkout</h3>
<hr/>
<form onSubmit={handleSubmit} className='container'>
    <div className='col'>
        <div className="row">
        <input name='name' value={values.name}onChange={handleInput}  type="text" className='formControl my-3' placeholder='nombre' />   
        </div>
        <div className="row">
        <input name='email' value={values.email}onChange={handleInput} type="email" className='formControl my-3' placeholder='mail' />   
        </div>
        <div className="row">
        <input name='address' value={values.address}onChange={handleInput}type="text" className='formControl my-3' placeholder='nombre' />   
        </div>
        <button type='submit' className='btn btn-dark row '>enviar</button>
    </div>
</form>

</div>
  )
}
