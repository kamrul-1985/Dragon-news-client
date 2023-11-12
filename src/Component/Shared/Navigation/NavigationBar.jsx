import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const NavigationBar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => {
        console.log(error.message);
      })
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto text-xl gap-5 fw-bold">
              <Link to="/category/0">Home</Link>
              <Link href="#pricing">About</Link>
              <Link href="#pricing">Career</Link>
            </Nav>
            <Nav>
              {/* <Image  src={profile} roundedCircle /> */}

              {user && <FaUserCircle style={{ fontSize: '3rem' }}></FaUserCircle>}

              {
                user ? <Button onClick={handleLogOut} variant="primary">LogOUt</Button> :
                  <Link to="/login"><Button variant="primary">LogIn</Button></Link>

              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
