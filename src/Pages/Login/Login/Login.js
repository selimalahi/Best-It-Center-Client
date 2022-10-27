import React from 'react';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import { FaGoogle, FaGithub } from "react-icons/fa";
import './Login.css';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { useContext } from 'react';
import {  GoogleAuthProvider } from 'firebase/auth';



const Login = () => {

    const {providerLogin} = useContext(AuthContext);
    const googleProvider =new GoogleAuthProvider()

    const handelGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result =>{
            const user =result.user;
            console.log(user)
        })
        .catch(error =>console.error(error));
    }
    return (
        <div className='login-container'>
            <ButtonGroup vertical>
                <Button onClick={handelGoogleSignIn} className='mb-2' variant="outline-primary"> Login with Google</Button><br />

                <h4 className='mb-2 '>OR</h4>
                <Button className='' variant="outline-dark"> Login with Github</Button>
            </ButtonGroup>
            {/* <div className='btn'>
                <ButtonGroup vertical>
                    <Button className='mb-2' variant="outline-primary"> Login With Google</Button>
                    <Button className='mb-10' variant="outline-dark">Login With Github</Button>


                </ButtonGroup>
            </div> */}

            <Form>
                <h4 className=' mt-10'>OR</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
            </Form>

        </div>
    );
};

export default Login;