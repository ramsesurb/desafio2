import './Header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
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
                    <Link to=' ' className="header-navlink">Home</Link>
                    <Link to='/productos/amp' className="header-navlink">Amps</Link>
                    <Link to='/productos/guitar' className="header-navlink">Guitars</Link>
                    <Link to='/productos/acoustic' className="header-navlink">Acoustic Guitars</Link>
                    
                </nav>
        
          <Nav><Button  variant="light">
          <CartWidget/>  
          </Button>{' '}</Nav>
        </Container>
      </Navbar>
      
    </>
        </header>
    )
}