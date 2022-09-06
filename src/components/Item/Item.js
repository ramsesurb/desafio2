import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const Item = ( {prod} ) => {

    return (
        <div  >
                  <div >
                    <div >
                      <div className='p-3' >
                        <Card bg="dark" text="light" border= "success"  style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={prod.images} style={{ height: '20rem' }} />
                        <Card.Body>
                            <Card.Title>{prod.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{prod.brand}</Card.Subtitle>
                            <Card.Text className=" overflow-wrap ">
                            
                            </Card.Text>
                            <ListGroup className="list-group-flush">
                            <ListGroup.Item>price: ${prod.price}</ListGroup.Item>
                            <ListGroup.Item>rating {prod.rating} points</ListGroup.Item>
                            </ListGroup>
                            <div className='py-2'>
                            <Link to={`/item/${prod.id}`} className="btn btn-outline-light my-2">Ver más</Link>
                            </div>
                        </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
    )
}

export default Item