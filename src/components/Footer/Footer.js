import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="container-fluid  text-light bg-dark">
  <div className='row'>
    <div className="col d-grid my-5 ms-5">
    <h3>Shopping</h3> 
    <Link to="/"  className='text-decoration-none text-light'>Payment Terms</Link>
    <Link to="/"  className='text-decoration-none text-light'>Shipping Costs</Link>
    <Link to="/"  className='text-decoration-none text-light'>Shipping Costs and Delivery Times</Link>
    <Link to="/"  className='text-decoration-none text-light'>Parcel tracking</Link>
    <Link to="/"  className='text-decoration-none text-light'>Warranty</Link>
    </div>
    <div className="col d-grid my-5 ms-5">
    <h3>Contact Us</h3> 
    <Link to="/"  className='text-decoration-none text-light'>Contact</Link>
    <Link to="/"  className='text-decoration-none text-light'>Support</Link>
    <Link to="/"  className='text-decoration-none text-light'>Phone: 123456789</Link>
    <Link to="/"  className='text-decoration-none text-light'>Email: guitarstore@guitarstore.com</Link>
    </div>
    <div className="col d-grid my-5 ms-5">
    <h3>About Us</h3> 
    <Link to="/"  className='text-decoration-none text-light'>Who we are</Link>
    <Link to="/"  className='text-decoration-none text-light'>Terms and Conditions</Link>
    <Link to="/"  className='text-decoration-none text-light'>Carrier</Link>
    <Link to="/"  className='text-decoration-none text-light'>Affiliate</Link>
    </div>
    <div className='text-center'>
        <p>This is a project site for my portfolio only © Ramses Urbina 2022</p>
    </div>
  </div>
</div>
  )
}
