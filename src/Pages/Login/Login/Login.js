import React from 'react';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import { FaGoogle, FaGithub } from "react-icons/fa";
import './Login.css';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { useContext } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const { signIn } = useContext(AuthContext);
    const navigate =useNavigate();
    

    const handelGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error));
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/')
                
            })
            .catch(error => console.error(error))
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

            <Form onSubmit={handleSubmit}>
                <h4 className=' mt-10'>OR</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
            </Form>

        </div>
    );
};

export default Login;