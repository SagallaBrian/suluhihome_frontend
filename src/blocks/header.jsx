import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const HeaderBlock = ({ title }) => {
  const activeStyle = {
    color: "#08c26b",
  };
  const navClor = {
    color: "#fbfbfb",
  };
  const fonts = {
    fontSize: "15px",
  };
  return (
    <div className="roboto">
      <Navbar expand="lg" fixed="top">
        <Container fluid="lg">
          <Navbar.Brand
            as={Link}
            to="home"
            style={navClor}
            className="sul-semibold"
          >
            {title}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end sul-semibold">
            <Nav style={fonts}>
              <Nav.Link
                as={NavLink}
                to="home"
                className="pe-3"
                style={({ isActive }) => (isActive ? activeStyle : navClor)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="about"
                className="pe-3"
                style={({ isActive }) => (isActive ? activeStyle : navClor)}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="service"
                className="pe-3"
                style={({ isActive }) => (isActive ? activeStyle : navClor)}
              >
                Service
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="portfolio"
                className="pe-3"
                style={({ isActive }) => (isActive ? activeStyle : navClor)}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="blog"
                className="pe-3"
                style={({ isActive }) => (isActive ? activeStyle : navClor)}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="contact"
                style={({ isActive }) => (isActive ? activeStyle : navClor)}
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

HeaderBlock.defaultProps = {
  title: "Default Header",
};

HeaderBlock.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderBlock;
