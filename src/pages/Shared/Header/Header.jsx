import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { FaUserCircle, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format('dddd MMMM D, YYYY')}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Breaking News</Button>
                <Marquee className='text-danger bold'>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
            <div>
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Link className='pe-2' to='/'>Home</Link>
                                <Link className='pe-2' href="#">About</Link>
                                <Link href="#">Career</Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">
                                    {user ? <span>{user.displayName}</span> : <FaUserAlt style={{ fontSize: '24px' }}></FaUserAlt>}
                                </Nav.Link>

                                <Link to='/login'>  <Button variant="dark">Login</Button></Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default Header;