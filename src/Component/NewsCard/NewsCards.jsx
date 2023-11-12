import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCards = ({news}) => {
      const {_id, title, details, image_url, author,rating,total_view,category_id} = news;
    
      return (
             
                    <Card className="mb-4">
      <Card.Header className='d-flex gap-4'>
      <Image style = {{height: '40px'}} src={author?.img} roundedCircle />
     <div>
     <h5>{author?.name}</h5>
      <h6>{author?.published_date}</h6>
     </div>
     <div>
      
     </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
         {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}.....<Link to= {`/news/${_id}`}>see more</Link></>}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{rating.badge}{rating.number}</Card.Footer>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card> 
      );
};

export default NewsCards;