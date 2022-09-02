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
    
    <Card bg="light" text="dark" border= "success"  style={{ width: '18rem' }}>
      <Card.Body>
        <button onClick={handleMinus} className="btn btn-outline-dark">-</button>
        <span className="mx-2">{counter}</span>
        <button onClick={handlePlus} className="btn btn-dark">+</button>
      </Card.Body>
    </Card>
  )
}    
export default ItemCounter








