import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./TopSellerItem.css"

const TopSellerItem = ( {prod} ) => {

    return (
                <div className="">
                <Card className='  p-5'>
                  <div className='  d-flex justify-content-center '>
                    <div >
                      <div className='image' ><img variant="top" src={prod.images} style={{ width: '12rem' }} alt="" /></div>
                      <div className= "title pb-1"><h4 >{prod.name}</h4></div>
                      <h5 className=" text-muted">{prod.brand}</h5>
                      <h5>${prod.price}</h5>
                      <div className='button py-1 '>
                        <Link to={`/item/${prod.id}`} className="btn btn-outline-dark ">See more</Link>
                    </div>
                    </div>
                  </div>  
                  </Card>

                  
                  </div>  
                  
    )
}

export default TopSellerItem