import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h2>Login With</h2>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle>Login with google</Button>
            <Button variant="outline-secondary"> <FaGithub></FaGithub>Login with github</Button>
            <div className='my-5'>
                <h4>Find Us On</h4>
                <ListGroup className='text-start'>
                    <ListGroup.Item> <FaFacebook></FaFacebook>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;