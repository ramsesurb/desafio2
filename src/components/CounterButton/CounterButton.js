import { useState } from "react"
import Card from 'react-bootstrap/Card';

const ItemCounter =() => {

    const [counter, setCounter] = useState (1)

    const handlePlus = () => {
        setCounter(counter + 1)
        console.log(counter)
    }
        
    
    const handleMinus = () => {
        if (counter > 0 ) {
            setCounter(counter - 1)
        }
    }
    return (
    
    <Card bg="dark" text="light" border= "success"  style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Contador de items</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          sumar o restar algun item del carrito
        </Card.Text>
        <button onClick={handleMinus} className="btn btn-outline-light">-</button>
        <span className="mx-2">{counter}</span>
        <button onClick={handlePlus} className="btn btn-light">+</button>
      </Card.Body>
    </Card>
  )
}    
export default ItemCounter








