import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget"
import "../stylesSheets/navbar.css";

function NavBar() {
  return (
    <>
      <Navbar className='navbar-container' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
            <container className="d-flex justify-content-end">
                <CartWidget/>
            </container>
        </Container>        
      </Navbar>      
    </>
  )}

  export default NavBar