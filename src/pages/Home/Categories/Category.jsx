import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    let { id } = useParams();
    const newsData = useLoaderData()
    return (
        <div>
            {id && <h2> This Category Has {newsData.length} News</h2> }
            {
                newsData.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;