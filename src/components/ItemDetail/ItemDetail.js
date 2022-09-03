import React from 'react';
import ItemCounter from '../CounterButton/CounterButton';

const Itemdetail = () =>{
  return (
    <div className="container ">
                <div>
                      <h1> Producto Detallado</h1>
                      <hr/>
                      <div className="container  p-3">
                          <div className="row">
                          <div className="col-sm-8">
                            <div className="text-center">
                           <img  style={{ width: '18rem' }} alt="" /> 
                           </div>
                           <hr/>
                           <h2>Description</h2>
                           <p>  </p> 
                           <h2>Specs</h2>
                           <p>Neckwood: </p>
                           <p>Fret number: </p>
                           <p>Color : </p>
                           <p>Country origin: </p>
                          </div>
                          <div className="col-sm-4 bg-dark text-light">
                            <h2> </h2>
                            <h3>Price </h3>
                            <ItemCounter/>
                            </div>
                          </div>
                      </div>
                  </div>     
                  
          

            </div>
  )
}

export default Itemdetail