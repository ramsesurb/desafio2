import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "../Item/item.css"

const Item = ( {prod} ) => {

    return (
        <div  >
                  <div  className="row">
                    <div className='col-2'>
                      <div className=' text-center p-3' >
                        <Card  bg="" text="" border= ""  style={{ width: '18rem' }}>
                        <div className="image" ><img className='item-image' variant="top" src={prod.images}  alt="" /></div>
                      
                      <div className= "title my-3 "><h4 >{prod.name}</h4></div>
                      <h4 className=" text-muted price">{prod.brand}</h4>
                      <h5>${prod.price}</h5>
                      <div className='button py-1 '>
                      {
                prod.stock > 0
                ? <Link to={`/item/${prod.id}`} className="btn btn-outline-dark " >See more</Link>
                : <p className='btn btn-outline-danger'>Out of stock</p>
            }
          
                    </div>
                        
                        </Card>
    
                      </div>
                    </div>
                  </div>
                </div>
                
    )
}

export default Item