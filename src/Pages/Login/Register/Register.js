import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Register.css';

const Register = () => {
    const handelSubmit = event =>{
        event.preventDefault();
    }
    return (
        <div className="form-container" >
            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your Name" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='PhotoURL' type="text" placeholder="Photo URL" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='name' type="email" placeholder="Enter email" required />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password"  required/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                   Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;