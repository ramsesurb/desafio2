import { useEffect, useState } from "react";
import Itemlist from "../itemList/ItemList";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Firebase/Firestore";

const ItemListContainer = ()=> {
    
const [productos, setProductos] = useState([])
const { categoryId } = useParams()


useEffect(() => {
    
    const prodRef = collection(db, 'Stock')
  
  
    getDocs(prodRef)
            .then((resp) => {
                const stockDB = resp.docs.map( (doc) => (doc.data({id: doc.id , ...doc.data()})) )
                console.log(stockDB)

                setProductos(stockDB)
            })
            .finally(() => {
                
            })
}, [categoryId])
    
        return (
        <div className="container my-5 ">
            
          <Itemlist productos={productos} />
        </div>
    )
    
    }
export default ItemListContainer
    

        
