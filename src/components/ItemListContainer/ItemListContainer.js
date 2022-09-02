import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/PedirDatos";
import Itemlist from "../itemList/ItemList";

const ItemListContainer = ()=> {
    
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        pedirDatos()
            .then( (res) => {
                setProductos(res)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
            })
    }, [])
        
            return (
            <div className="container my-5 ">
                
              <Itemlist productos={productos} key={productos.id}/>

            </div>
        )
        
        }
        export default ItemListContainer
        

        
