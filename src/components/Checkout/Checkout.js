import { useState } from 'react'
import { useCartContext } from '../contexts/CartProvider/CartProvider'
import {addDoc, collection, getDocs, writeBatch, query, where, documentId} from "firebase/firestore"
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
        if (values.name.length < 2) {
            alert("Nombre incorrecto")
            return
        }

        if (values.email.length < 2) { 
            alert("Email incorrecto")
            return 
        }
        

        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'Ordenes')
        const stockRef = collection(db, 'Stock')
        const q = query(stockRef, where(documentId(), 'in', cart.map(item => item.id)))
        const productos = await getDocs(q)

        const outOfStock = []
            
        productos.docs.forEach((doc) => {
            const itemInCart = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.cantidad
                })
            } else {
                outOfStock.push(itemInCart)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordenesRef,checkoutOrder)
                    .then((doc) => { 
                    finishShopping(doc.id)}) 
                    
                })
        } else {
            
            alert("out of stock")
            
        }

              
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
