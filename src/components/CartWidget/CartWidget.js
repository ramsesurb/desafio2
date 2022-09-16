import { useContext } from 'react'
import { CartContext } from '../contexts/CartProvider/CartProvider'
import { Link} from 'react-router-dom'
import "./CartWidget.css"
import { Button } from 'react-bootstrap'




export const CartWidget = () => {

    const { cartQuantity,cart } = useContext(CartContext)

    return (
        <div className={`Widget ${cart.length > 0 ? 'Widget-visible' :''}`}>
        <Button variant="light">
        <Link to="/cart">
        <img
              alt=""
              src="\cartIcon.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
        <span className='WidgetNumber'>{cartQuantity()}</span>
        </Link>
        </Button>      
        </div>
    )
}