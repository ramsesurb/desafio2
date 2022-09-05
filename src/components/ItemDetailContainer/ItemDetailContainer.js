import { useEffect, useState } from "react";
import ItemCounter from "../CounterButton/CounterButton";
import {stock} from "../Data/Data2"
import Itemdetail from "../ItemDetail/ItemDetail";


const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(stock)
            }, 3000)
        } )
    }
const ItemDetailContainer = ()=> {
    
    const [item, setItem] = useState([])
    console.log(item)
    
    useEffect(() => {
        pedirDatos()
            .then( (res) => {
                setItem(res)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                // console.log("Fin del proceso")
            })
    }, [])
        
            return (
            <Itemdetail item={item} key={item.id}/>
        )
        
        }
        export default ItemDetailContainer
        

        
