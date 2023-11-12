import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';



const Header = () => {

      return (
            <Container>
                  <div className='text-center my-5'>
                  <img src={logo} alt="" />
                  <p className='text-secondary'>Journalism Without Fear or Favour</p>
                  <p className=''>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-success-subtle'>
            <Button variant="danger">Latest</Button>
            <Marquee className='text-danger bg-light fs-2' speed={50} pauseOnHover={true}>
  I can be a React component, multiple React components, or just some text.or just some text.or just some text.
</Marquee>
            </div>
            
            </Container>
            
      ); 
};

export default Header;