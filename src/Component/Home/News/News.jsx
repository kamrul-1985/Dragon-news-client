
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
const News = () => {

 const news = useLoaderData();
 console.log(news);
 const {_id, title, details, image_url, author,rating,total_view,category_id} = news;
  return (
     <div>
      <h1>this is news......</h1>
      <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
       <Link to={`/category/${category_id}`}><button btn='success'>all news of this category</button></Link>
      </Card.Body>
    </Card>
     </div>
  );
};

export default News;