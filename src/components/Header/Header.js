import './Header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Cart } from '../CartWidget/CartWidget';





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
            Ram Music Store
          
          
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Guitars</Nav.Link>
            <Nav.Link href="#pricing">Amps</Nav.Link>
            <Nav.Link href="#Accesories">Accesories</Nav.Link>
            <Nav.Link href="#Basses">Basses</Nav.Link>
            
          </Nav>
          <Nav><Button  variant="light">
          <Cart/>  
          </Button>{' '}</Nav>
        </Container>
      </Navbar>
      
    </>
        </header>
    )
}