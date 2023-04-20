import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const mylinks = [
  { title: "Home", links: "home", id: 1 },
  { title: "About Us", links: "about", id: 2 },
  { title: "Service", links: "service", id: 3 },
  { title: "Portfolio", links: "portfolio", id: 4 },
  { title: "Blog", links: "blog", id: 5 },
  { title: "Contact Us", links: "contact", id: 6 },
];

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

  const renderedLinks = mylinks.map((mylink) => (
    <Nav.Link
      key={mylink.id}
      as={NavLink}
      to={mylink.links}
      className="pe-3"
      style={({ isActive }) => (isActive ? activeStyle : navClor)}
    >
      {mylink.title}
    </Nav.Link>
  ));
  const [navbar, setNavbar] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  const handleNavbarToggle = () => {
    setExpanded((expanded) => !expanded);
    if (expanded) {
      setNavbar(true);
    }
  };

  return (
    <div className="roboto">
      <Navbar
        expand="lg"
        fixed="top"
        className={`my-class ${expanded ? "mynavbg" : ""} 
         ${navbar ? "mynavbg" : ""}`}
        expanded={expanded}
        onToggle={handleNavbarToggle}
      >
        <Container fluid="lg">
          <Navbar.Brand
            as={Link}
            to="home"
            style={navClor}
            className="sul-semibold"
          >
            {title}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="text-light"
          />
          <Navbar.Collapse
            className="justify-content-end sul-semibold"
            id="basic-navbar-nav"
          >
            <Nav style={fonts}>{renderedLinks}</Nav>
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
