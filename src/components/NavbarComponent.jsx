import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import "../stylesheets/NavbarComponent.css"

function NavbarComponent() {
  return (
    <>
      <Navbar className="navbar-component py-3" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="text-light mx-4 text-decoration-none">🏠 Home</Link>
              <Link to="Contacto" className="text-light text-decoration-none">📒 Contacto</Link>
            </Nav>
          </Navbar.Collapse>
          <Link to="/" className="text-light text-decoration-none h5">Happy Cake 🍰</Link>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent;
