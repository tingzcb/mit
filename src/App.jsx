import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.css';
import LogoImage from "./components/logoImage";
import Home from "./pages/home/Home";
import BottomFooter from "./components/BottomFooter";
import SideBar from "./components/SideBar";
import './app.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'w3-css/w3.css';
import { useEffect, useState } from "react";



const App = () => {


  return (
  <>
   


<Container>
      <Row >
        <Container>
          <Col className="image-container"style={{backgroundColor: '#5A585B'}} >
          <LogoImage/> 
          </Col>
          </Container>
        
      </Row>
      <Row>
        <Col> <NavBar/></Col>
      </Row>
      <Row>
        <Col xs={4}><SideBar/></Col>
        <Col xs={8}>
          <Container className="page-container"><Home/></Container></Col>
        
      </Row>
      <Row>
        
      <Col xs={4}></Col>
        <Col className="bottomFooter"><BottomFooter/></Col>
       
      </Row>
    </Container>



    
   
   
    

    
  </>
  )
}

export default App