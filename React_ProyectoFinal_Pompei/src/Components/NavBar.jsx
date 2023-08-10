import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget/CartWidget";
import "../stylesSheets/navbar.css"
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Link className='navbar-brand' id="navbar-brand"to={"/"}> <h1>El Club del <span>Whisky</span> </h1></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={"/category/Speyside"} className="nav-link"> Speyside </NavLink>
            <NavLink to={"/category/Islay"} className="nav-link"> Islay </NavLink>
            <NavLink to={"/category/Highland"} className="nav-link"> Highland </NavLink>
            <NavLink to={"/category/Campbeltown"} className="nav-link"> Campbeltown </NavLink>
            <NavLink to={"/category/Island"} className="nav-link"> Island </NavLink>
            <NavLink to={"/category/Blend"} className="nav-link"> Blend </NavLink>
          </Nav>
        </Navbar.Collapse>
        <div>
          <CartWidget/>
        </div>
      </Container>      
    </Navbar>
  );
}

export default NavBar;