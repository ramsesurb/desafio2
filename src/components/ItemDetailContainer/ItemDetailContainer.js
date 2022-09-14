import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/PedirDatos";
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";





const ItemDetailContainer = ()=> {

    const [item, setItem] = useState([])
    const {itemId} = useParams()
    

    useEffect(() => {
      pedirDatos()
          .then( (res) => {
              setItem( res.find((prod) => prod.id === Number(itemId)) )
          })
          .catch( (error) => {
              console.log(error)
          })
          .finally(() => {
              
          })
  }, [itemId])

            return (
           <ItemDetail item={item} />
        )

        }
        export default ItemDetailContainer