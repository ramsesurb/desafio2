import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/PedirDatos";
import Itemlist from "../itemList/ItemList";
import { useParams } from 'react-router-dom';


const ItemListContainer = ()=> {
    
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()
    console.log (categoryId)

    useEffect(() => {
        pedirDatos()
            .then( (res) => {
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos( res.filter((prod) => prod.category === categoryId) )
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                
            })
    }, [categoryId])
        
            return (
            <div className="container my-5 ">
                
              <Itemlist productos={productos} key={productos.id}/>

            </div>
        )
        
        }
        export default ItemListContainer
        

        
