import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Registation = () => {
    const {handleRegister} = useContext(AuthContext);
    const handleRegisterButton =(event)=>{
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);

        handleRegister(email,password)
        .then(result =>{
            const newUser = result.user;
            console.log(newUser)
            form.reset()
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <div>
            <Container>
                <h2>Complete Your Register Here</h2>
                <Form onSubmit={handleRegisterButton}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                    <br />
                    <Form.Text className="text-muted text-center">
                        Already Have Account ? <Link to='/login'>Login</Link>
                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Registation;