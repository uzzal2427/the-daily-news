import React, { useContext, useState } from 'react';
import Header from '../../Shared/Header/Header';
import { Button, Container, Form } from 'react-bootstrap';
import SimpleNav from '../../Shared/SinpleNav/SimpleNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {

    const [error,setError] = useState('');

    const {handleLogin} = useContext(AuthContext);
    const handleLoginButton = (event) => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;

        handleLogin(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
        })
        .catch(error =>{
            const errorMassage = error.message;
            setError(errorMassage);
            console.log(error.message);
        })
    }
    return (
        <div>
            <Container>
                <h2>Please Login Here</h2>
                <Form onSubmit={handleLoginButton}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            {error}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <br />
                    <Form.Text className="text-muted text-center">
                        Don't Have Account ? <Link to='/register'>Register</Link>
                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Login;