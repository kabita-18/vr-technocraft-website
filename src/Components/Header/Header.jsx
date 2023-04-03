import React ,{useEffect}from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "./logo.jpeg";

const logoStyle = {
  width:"60px",
  height:"auto"
  
}

const navLinkStyle = {
  textDecoration:"none",
  color: "var(--bs-nav-link-color)"
  
}
const Header = () => {
  
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <img
              src={logo }
              id = "logo"
              style={logoStyle}
              
              className="d-inline-block align-top"
              alt="Vr- technocraft logo"
            />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link className="nav-link" to="/">Home</Link>
              <NavDropdown title="Our Products" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/Fire-alarm System">
                  Fire-alarm System
                </NavDropdown.Item>
                <NavDropdown.Item href="/PA System">
                  PA System
                </NavDropdown.Item>
                <NavDropdown.Item href="/VESDA System">
                  VESDA System
                </NavDropdown.Item>

                <NavDropdown.Item href="/Access Control System">
                  Access Control System
                </NavDropdown.Item>
                <NavDropdown.Item href="/Fire Suppression System">
                  Fire Suppression System
                </NavDropdown.Item>
                <NavDropdown.Item href="/Fire Extinguishers">
                  Fire Extinguishers
                </NavDropdown.Item>
                <NavDropdown.Item href="/Fire Hydrant System">
                  Fire Hydrant System
                </NavDropdown.Item>
                <NavDropdown.Item href="/Rodent Repellent System">
                  Rodent Repellent System
                </NavDropdown.Item>
                <NavDropdown.Item href="/Water Leak Detection">
                  Water Leak Detection
                </NavDropdown.Item>
                <NavDropdown.Item href="/action/3.2">CCTV</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Menu" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/action/3.1">
                  Organization
                </NavDropdown.Item>
                <NavDropdown.Item href="/action/3.2">Blog</NavDropdown.Item>
                <NavDropdown.Item href="/action/3.3">
                  Our Solution
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/action/3.4">
                  Contact Us
                </NavDropdown.Item>
                <NavDropdown.Item href="/action/3.2">
                  News Overviews
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
