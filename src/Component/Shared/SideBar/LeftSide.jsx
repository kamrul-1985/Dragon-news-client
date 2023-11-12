import React, { useEffect, useState } from 'react';
import { Button, Overlay } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSide = () => {
      const [categories, setCategories] = useState([]);
      useEffect(()=>{
            fetch('http://localhost:7000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error.message))
      },[])


      return (
         <div>
            <h4>News Categories</h4>
            <div>
            {
                  categories.map(category => <p 
                         key={category.id}>
                       <Button variant="light"> <Link to={`/category/${category.id}`} className='fw-bold text-secondary text-decoration-none'>
                        {category.name}</Link></Button>
                  </p>)
            }
            </div>
            
         </div>
      );
};

export default LeftSide;