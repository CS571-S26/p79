import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">🎓 Campus Survival Hub</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/resources">Resources</Nav.Link>
              <Nav.Link as={NavLink} to="/map">Map</Nav.Link>
              <Nav.Link as={NavLink} to="/saved">Saved</Nav.Link>
              <Nav.Link as={NavLink} to="/submit">Submit a Tip</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default NavBar;
