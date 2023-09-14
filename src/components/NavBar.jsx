import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink, Outlet } from 'react-router-dom';
import SideBar from './SideBar';
const NavBar = () => {
  return (
    <>
      <header>
        <Navbar  bg='primary' data-bs-theme="dark">
          <Container>
        
            <nav className='navbar navbar-dark me-auto'>
              <NavLink to="/">Home</NavLink>
              <NavLink to="managedItServices">Managed IT Services</NavLink>
              <NavLink to="hostingServices">Hosting Services</NavLink>
              <NavLink to="contactUs">Contact US</NavLink>
            </nav>
          </Container>
        </Navbar>
      </header>
      <main>
 
      </main>

      
    </>
  )
}

export default NavBar