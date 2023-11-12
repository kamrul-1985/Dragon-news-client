import React, { cloneElement } from 'react';
import {useLoaderData, useParams} from 'react-router-dom';
import NewsCards from '../../NewsCard/NewsCards';

const Category = () => {
const {id} = useParams();
const categories = useLoaderData();



      return (
            <div>
                  {id && <h1>In this category there are {categories.length} news</h1>}
            {
                  categories ?.map(news => <NewsCards
                  key={news._id}
                  news={news}>

                  </NewsCards>)
            }
            </div>
      );
};

export default Category;