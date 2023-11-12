import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const LogIn = () => {

  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/category/0';

  const handleLogIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    signIn(email, password)
    .then (result => {
      const loggedInUser = result.user;
      navigate(from, {replace: true});
    }) 

  .catch(error => { 
    console.log(error.message)
  })

  };
  
      return (
            <Container className='w-25 mx-auto my-5 bg-light p-4'>
              <h1>Please Login</h1>
                 <Form onSubmit={handleLogIn}>
                 
                 <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Form.Text className="text-success">
        Don`t have an account?   please. 
       <Link to="/register" className='text-danger fw-bold ps-2'>Register</Link>
        </Form.Text>
        <br />
      
      <Button variant="primary" type="submit">
        LogIN
      </Button>
     
    </Form>  
            </Container>
      );
};

export default LogIn;