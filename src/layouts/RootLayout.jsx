import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import LogoImage from "../components/logoImage";
import BottomFooter from "../components/BottomFooter";
import Home from "../pages/home/Home";

const RootLayout = () => {
  return (
    <>
      <Container>
        <Row>
          <Container>
            <Col
              className="image-container"
              style={{ backgroundColor: "#5A585B" }}
            >
              <LogoImage></LogoImage>
            </Col>
          </Container>
        </Row>

        <Row>
          <Col>
            {" "}
            <NavBar />
          </Col>
        </Row>

        <Row>
          <Col className="SideBar" xs={4}>
            <SideBar />
          </Col>
          <Col className="pageCol">
            <Container className="page-container">
              <Outlet></Outlet>
            </Container>
          </Col>
        </Row>

        <Row>
          <Col xs={4}></Col>
          <Col className="bottomFooter">
            <BottomFooter />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RootLayout;
