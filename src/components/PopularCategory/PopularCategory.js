import React from 'react'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const PopularCategory = () => {
  return (
    <div className='m-3'>
    <h2 className='text-center'>Shop Popular Categories</h2>
    <hr/>
    <div className='row'>
         <div className='col d-grid my-5 ms-5'>
         <Card className='container text-center' style={{ width: '18rem' }}>
           <Card.Img variant="top" src="https://muzikercdn.com/uploads/products/789/78991/main_9a486311.jpg" />
           <Card.Body>
           <Link to="/productos/guitar"  className=' fs-4 header-navlink text-decoration-none text-dark'>Electric Guitars</Link>
           </Card.Body>
         </Card>
         </div>
         <div className='col d-grid my-5 ms-5'>
         <Card className='container text-center' style={{ width: '18rem' }}>
           <Card.Img className='pb-3' variant="top" src="https://muzikercdn.com/uploads/products/242/24269/main_2ec43c64.jpg" />
           <Card.Body className='pt-5'>
           <Link to='/productos/amp'  className=' fs-4 pt-3 header-navlink text-decoration-none text-dark'>Amplifiers</Link>
           </Card.Body>
         </Card>
         </div>
         <div className='col d-grid my-5 ms-5'>
         <Card className='container text-center' style={{ width: '18rem' }}>
           <Card.Img variant="top" src="https://muzikercdn.com/uploads/products/240/24016/main_4715f930.jpg" />
           <Card.Body>
           <Link to='/productos/acoustic'  className=' fs-4 header-navlink text-decoration-none text-dark'>Acoustic Guitars</Link>
           </Card.Body>
         </Card>
         </div>
    </div>
    </div>
  )
}
