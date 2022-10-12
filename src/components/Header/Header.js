import './Header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';





export const Header = () => {

    return (
        <header className="bg-header">
         <>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          
          <img
              alt=""
              src="\logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <Link to=' ' className="mainTittle">Ram Music Store</Link>
           

          </Navbar.Brand>

          <nav className="header-navbar">
                    <Link to=' ' className="header-navlink text-decoration-none ">Home</Link>
                    <Link to='/productos' className="header-navlink">Products</Link>
                    
                    
                </nav>
        
          <CartWidget/>
        </Container>
      </Navbar>
      
    </>
        </header>
    )
}