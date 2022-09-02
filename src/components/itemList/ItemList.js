import Item from "../Item/Item"


const ItemList = ( {productos = []} ) => {

    return (
        <div className="container d-flex justify-content-center">
          <div className="row">
            
            { productos.map((prod) => 
            <div className="col-md-4">
            <Item prod={prod} key={prod.id}/>
            </div>)}
          
          </div>  
        </div>
    )
}

export default ItemList