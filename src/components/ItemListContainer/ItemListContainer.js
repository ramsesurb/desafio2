import { useEffect, useState } from "react";
import Itemlist from "../itemList/ItemList";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Firebase/Firestore";
import NavList from "./NavList";

const ItemListContainer = ()=> {
    
const [productos, setProductos] = useState([])
const { categoryId } = useParams()


useEffect(() => {
    
    const prodRef = collection(db, 'Stock')
    const q = categoryId 
    ? query(prodRef, where('category', '==', categoryId) )
    : prodRef
  
    getDocs(q)
            .then((resp) => {
                const stockDB = resp.docs.map( (doc) => ({id: doc.id , ...doc.data()}))
             

                setProductos(stockDB)
            })
            .finally(() => {
                
            })
}, [categoryId])
    
        return (
       
          
          <div className=" container-fluid   my-5 grid row">
                    <div className="col-2 my-3 ">
                        <NavList/>
                    </div>
                    <div className="col-10">
                    <Itemlist productos={productos} />
                    </div>

                   
                </div>
        
    )
    
    }
export default ItemListContainer
    

        
