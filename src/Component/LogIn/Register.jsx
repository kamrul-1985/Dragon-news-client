import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useState } from 'react';

const Register = () => {

  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false)

  const handleRegister = event => {

    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value
    const email = form.email.value;
    const password = form.password.value;
   
createUser(email, password)
.then(result => {
  const createdUser = result.user;
  
})
.catch(error => {
  console.log(error.message);
})
  }

 const handleTermsAndCondition = event => {
setAccepted(event.target.checked);
  }

  return (
    <Container className='w-25 mx-auto my-2 bg-light p-4'>
      <h1>Please Register</h1>
      <Form onSubmit={handleRegister}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Your name" required />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>photo</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Enter photo url" required />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>

{/* check box for accepting term & conditions */}

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check 
          onClick={ handleTermsAndCondition} 
          type="checkbox" 
          label="Check me out" />
          <Form.Text className="text-success">
            Accept <Link to="/terms">Terms and Condition</Link>!
          </Form.Text>
        </Form.Group>

        <Form.Text className="text-success">
          Already have an account?   please.
          <Link to="/login" className='text-danger fw-bold ps-2' >LogIn</Link>
        </Form.Text>
        <br />

        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>

      </Form>
    </Container>
  );
};

export default Register;