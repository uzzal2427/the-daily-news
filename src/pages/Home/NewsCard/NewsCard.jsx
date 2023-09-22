import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookmark, FaRegEye, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import moment from 'moment';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {

    const { _id, title, details, image_url, author, total_view,rating } = news;
    return (
        <Card className="mb-4 ">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author.img} roundedCircle />
                <div className='flex-grow-1 ps-2'>
                    <p className='mb-0'>{author.name}</p>
                    <span>{moment(author.published_date).format('MMM Do YY')}</span>
                </div>
                <div>
                    <FaBookmark></FaBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read more</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <span className='ps-2'>{rating.number}</span>
                </div>
                <div>
                    <FaRegEye></FaRegEye> <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;