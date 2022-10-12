import React from 'react'
import { BsCheckCircle } from "react-icons/bs";
import { BsFillShieldFill } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";
import { BsLightningChargeFill} from "react-icons/bs";
import { BsStarFill} from "react-icons/bs";

export const DetailCard  = ({item}) => {


  return (
         <div className='row m-1'>
        <h2>Price ${item.price}</h2>
        <h5>rating {item.rating} <BsStarFill/> </h5>
        <hr/>
        <p>Or as low as ${(item.price/12).toFixed(2)}/month with 12 mo. financing</p>
        <hr/>
        <h3 className=''>Stock available {item.stock}</h3>
        <hr/>
        <br/>
        <h4> <BsCheckCircle/> In Stock and Ready to Ship </h4> 
        <div className='col  text-center' >
           <h3><BsFillShieldFill/></h3>
           <p>2 year Waranty</p>
        </div>
        <div className='col text-center' >
           <h3><BsHeadset/> </h3>
           <p>Free Tech Suport</p>
        </div>
        <div className='col text-center' >
          <h3><BsLightningChargeFill/></h3>
          <p >Fast Shipping</p>
        </div>
    </div>
  )
}
