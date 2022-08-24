import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

const HeaderBlock = () => {
  const activeStyle = {
    color: "#198754",
  };
  const fonts = {
    fontSize: "15px",
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid="lg">
        <Navbar.Brand as={Link} to="home">
          Suluhi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav style={fonts}>
            <Nav.Link
              as={NavLink}
              to="home"
              className="pe-3"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="about"
              className="pe-3"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="service"
              className="pe-3"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Service
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="portfolio"
              className="pe-3"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="blog"
              className="pe-3"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="contact"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderBlock;
