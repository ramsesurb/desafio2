import TopSellerItem from "./TopSellerItem"
import "./TopSellerItem.css"




const TopSellerList = ( {productos = []} ) => {

    return (
        <div className="container ">
          <div className="  cardContainer row text-center">
            <h2>Top Sellers</h2>
            <hr/>
            { productos.map((prod) => 
            <div key={prod.id} className="col-3">
            <TopSellerItem prod={prod}/>
            </div>)}
          
          </div>  
        </div>
    )
}

export default TopSellerList