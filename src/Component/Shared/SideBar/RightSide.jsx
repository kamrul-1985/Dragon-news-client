import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithubSquare, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; 
import Qzone from '../../Qzone/Qzone';
import bg1 from '../../../assets/bg1.png';

const RightSide = () => {
      return (
            <div>
              <h3>Log In With</h3>
                  <Button className='my-2' variant="success"> <FaGoogle /> Login with Google</Button>
                 <Button variant="success"> <FaGithubSquare /> Login with Git hub</Button>
                 <div className='my-2'>
                  <h3>Find Us On</h3>
                  <ListGroup>
      <ListGroup.Item><FaFacebookF />Face book</ListGroup.Item>
      <ListGroup.Item><FaTwitter /> Twiteer</ListGroup.Item>
      <ListGroup.Item> <FaInstagram />Instragram</ListGroup.Item>
     
    </ListGroup>
                 </div>
                 <Qzone />
                 <div className="position-relative m-2 mt-4">
            <img
              src={bg1}
              alt="Example Image"
              className="img-fluid"
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 p-4">
              <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <h1 className="text-light text-center">Text Overlay</h1>
                <p className="text-light text-center">
                  This is an example of a text overlay on an image using React
                  Bootstrap.
                </p>
                <button className='btn-danger'> Learn More</button>
              </div>
            </div>
          </div>
            </div>
      );
};

export default RightSide;