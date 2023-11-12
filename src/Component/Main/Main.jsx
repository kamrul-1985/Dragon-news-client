import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../Shared/SideBar/LeftSide';
import RightSide from '../Shared/SideBar/RightSide';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Shared/Navigation/NavigationBar';

const Main = () => {
      return (
            <div>
                  <Header />
                 <Container>
                  <NavigationBar></NavigationBar>
      <Row>
        <Col lg={3} ><LeftSide /></Col>
        <Col lg={6} >     
<Outlet>

</Outlet>
        </Col>
        <Col lg={3}> <RightSide /></Col>
      </Row>
    </Container>
                 <Footer/>
            </div>
      );
};

export default Main;