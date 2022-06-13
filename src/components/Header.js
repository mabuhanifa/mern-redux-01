import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link className="text-decoration-none" to="/">
          <Navbar.Brand > Gadget Square </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Link className="text-decoration-none" to="/">
              <Nav.Link >
                <i className="fas fa-shopping-cart"></i>Cart
              </Nav.Link>
              </Link>
              <Link className="text-decoration-none" to="/">
              <Nav.Link >
              <i className="fas fa-user"></i>sign In</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
