import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../Firebase/Firestore"





const ItemDetailContainer = ()=> {

    const [item, setItem] = useState([])
    const {itemId} = useParams()
    

    useEffect(() => {
        const docRef = doc(db, 'productos', itemId)
        
        getDoc(docRef)
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()})
            })
          .finally(() => {
              
          })
  }, [itemId])

            return (
           <ItemDetail item={item} />
        )

        }
        export default ItemDetailContainer