import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightSide from '../Shared/SideBar/RightSide';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
      return (
            <div>
                  <Header />
                 <Container>
      <Row>
        
        <Col lg={9} >     
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

export default NewsLayout;