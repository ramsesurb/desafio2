import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/PedirDatos";
import Itemdetail from "../ItemSingle/ItemSingle";
import { useParams } from 'react-router-dom';


const ItemDetailContainer = ()=> {
    
    const [item, setItem] = useState([])
    console.log(item)
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
    }, [])
        
            return (
            <Itemdetail item={item} key={item.id}/>
        )
        
        }
        export default ItemDetailContainer
        

        



        
