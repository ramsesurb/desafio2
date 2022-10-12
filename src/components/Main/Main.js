import React from 'react'
import { Carrousel } from '../Carrousel/Carrousel'
import {PopularCategory} from "../PopularCategory/PopularCategory"
import TopSeller from "../TopSeller/TopSellerContainer"




export const MainPage = () => {
  return (
    <div>
        <Carrousel/>
        <PopularCategory/>
        <TopSeller/>
    </div>
  )
}
