import React from 'react';

const SingleNews = ({news}) => {
      const {_id, title, details, image_url, author,rating,total_view} = news;
      return (
            <div>
                  <h1>Single news is comming soon......</h1>
                  <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
            </div>
      );
};

export default SingleNews;