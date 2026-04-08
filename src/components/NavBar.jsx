import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Campus Survival Hub</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/resources">Resources</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Outlet />
    </>
  );
}

export default NavBar;
