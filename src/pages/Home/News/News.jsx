import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Editors from './Editors';

const News = () => {
    const news = useLoaderData();
    const { category_id, title, details, image_url } = news;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                       {details}
                    </Card.Text>
                    <Button variant="danger">
                        <Link className='text-white text-decoration-none' to={`/category/${category_id}`}> <FaArrowLeft className='pe-2'></FaArrowLeft>All news in this category</Link>
                    </Button>
                </Card.Body>
            </Card>
            <Editors></Editors>
        </div>
    );
};

export default News;