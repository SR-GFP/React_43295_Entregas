import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget"
import "../stylesSheets/navbar.css";
import { LiaGlassWhiskeySolid } from "react-icons/lia";
import { GiSpiralBottle } from "react-icons/gi";


function NavBar() {
  return (
    <>
      <Navbar className='navbar-container' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Container className="icono-container">
              <GiSpiralBottle/>
              <LiaGlassWhiskeySolid/>
            </Container>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
            <Container className="d-flex justify-content-end">
                <CartWidget/>
            </Container>
        </Container>        
      </Navbar>      
    </>
  )}

  export default NavBar