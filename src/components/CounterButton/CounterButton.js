import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Counter = ({max, counter, setCounter, handleAdd}) => {

  const handleMinus = () => {
      if (counter > 1) {
          setCounter(counter - 1)
      }
  }
  
  const handlePlus = () => {
      if (counter < max ) {
          setCounter(counter + 1)
      }
  }
    return (
    
    <Card bg="light" text="dark"  border='white' style={{ width: "auto" }}>
      <Card.Body>
        <button onClick={handleMinus} className="btn btn-outline-dark">-</button>
        <span className="mx-2">{counter}</span>
        <button onClick={handlePlus} className="btn btn-dark">+</button>
        
        <Link to="/cart" onClick={handleAdd} className="btn btn-outline-dark m-2">Add to cart</Link>
      </Card.Body>
    </Card>
    
  )
}    
export default Counter








