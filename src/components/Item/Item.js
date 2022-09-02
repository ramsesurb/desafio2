import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Item = ( {prod} ) => {

    return (
        <div  >
                  <div >
                    <div >
                      <div className='p-3' >
                        <Card bg="dark" text="light" border= "success"  style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={prod.images} />
                        <Card.Body>
                            <Card.Title>{prod.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text className=" overflow-wrap ">
                            
                            </Card.Text>
                            <ListGroup className="list-group-flush">
                            <ListGroup.Item>price: ${prod.price}</ListGroup.Item>
                            <ListGroup.Item>rating {prod.rating} points</ListGroup.Item>
                        </ListGroup>
                        </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
    )
}

export default Item