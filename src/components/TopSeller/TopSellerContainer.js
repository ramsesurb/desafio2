import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where,limit } from "firebase/firestore";
import { db } from "../../Firebase/Firestore";
import TopSellerList from "./TopSeller";

const TopSeller = ()=> {    
const [productos, setProductos] = useState([])
const { categoryId } = useParams()

useEffect(() => {
    
    const prodRef = collection(db, 'Stock')
    const q = query(prodRef, where('isTopSeller', '==', true),limit(4) )
    
  
    getDocs(q)
            .then((resp) => {
                const stockDB = resp.docs.map( (doc) => ({id: doc.id , ...doc.data()}))
              

                setProductos(stockDB)
            })
            .finally(() => {
                
            })
}, [categoryId])
    
        return (
        <div className="container my-5 ">
            
          <TopSellerList productos={productos} />
        </div>
    )
    }
export default TopSeller
    

        
