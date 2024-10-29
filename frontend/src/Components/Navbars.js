import { Nav, Navbar, Container } from 'react-bootstrap';


const Navbars = () =>{
  return(
    <Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary my-2">
  <Container className="position-relative">
    <Navbar.Collapse id="navbar-default-primary" className="w-100">
      <Nav className="navbar-nav-hover align-items-lg-center">
        <Nav.Link href="/student">Student</Nav.Link>
        <Nav.Link href="/teacher">About</Nav.Link>
        <Nav.Link href="/admin">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>

    <Navbar.Toggle aria-controls="navbar-default-primary" />
  </Container>
</Navbar>
  );
  
};
export default Navbars;

