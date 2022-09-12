
import Card from 'react-bootstrap/Card';

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
    
    <Card bg="light" text="dark" border= "success"  style={{ width: '18rem' }}>
      <Card.Body>
        <button onClick={handleMinus} className="btn btn-outline-dark">-</button>
        <span className="mx-2">{counter}</span>
        <button onClick={handlePlus} className="btn btn-dark">+</button>
        <br/>
        <button onClick={handleAdd} className="btn btn-success my-2">
                Agregar al carrito
            </button>
      </Card.Body>
    </Card>
  )
}    
export default Counter








