import Item from "../Item/Item"


const ItemList = ( {productos = []} ) => {

    return (
        <div className="container d-flex justify-content-center">
          <div className="row">
            
            { productos.map((prod) => 
            <div key={prod.id} className="col-md-4">
            <Item prod={prod}/>
            </div>)}
          
          </div>  
        </div>
    )
}

export default ItemList