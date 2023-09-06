import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
  return (
    <>
      <Navbar  bg='primary' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Managed IT Services</Nav.Link>
            <Nav.Link href="#pricing">Hosting Services</Nav.Link>
            <Nav.Link href="#pricing">Contact US</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  )
}

export default NavBar