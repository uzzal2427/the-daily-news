import React from 'react';
import { Card } from 'react-bootstrap';
import img1 from '../../../assets/1.png'
import img2 from '../../../assets/2.png'
import img3 from '../../../assets/3.png'

const Editors = () => {
    return (
        <div className='pt-3'>
            <h2>Editors Insight</h2>
            <div className='d-flex'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title> Some quick example text to build on the card title </Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title> Some quick example text to build on the card title </Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title> Some quick example text to build on the card title </Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Editors;