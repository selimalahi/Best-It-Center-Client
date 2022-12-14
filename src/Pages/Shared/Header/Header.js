import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image from './logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
// import { useState } from 'react';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (

        <div>
            <Navbar collapseOnSelect className='mb-5' expand="lg" bg="light" variant="light">
                <Container>
                    <img src={image} className="img" style={{ width: "80px" }} alt="" />
                    <Navbar.Brand href="#home">BEST IT CENTER</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                            <Nav.Link><Link to='/courses'>Courses</Link></Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                FAQ
                            </Nav.Link>
                            <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                            {/* <Nav.Link><Link to='/login'>Login</Link></Nav.Link> */}
                            <Nav.Link href="#deets">
                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName}</span>
                                            <button className='btn-signout' variant="light" onClick={handleLogOut}>Logout</button>
                                        </>
                                        :
                                        <>
                                            <Link className='mx-2' to='/login'>Login</Link>
                                            <Link to='/register'>Register</Link>
                                        </>
                                }
                            </Nav.Link>
                            <Nav.Link href="#deets">
                                {user?.photoURL ?
                                    <abbr title={user?.displayName}> <Image
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={user?.photoURL}>
                                    </Image></abbr>
                                    : <FaUser></FaUser>
                                }
                            </Nav.Link>
                            <>
                                <style type="text/css">
                                    {`
                                     .btn-flat {
                                      background-color: purple;
                                      color: white;
                                           }

                                 .btn-xxl {
                                   padding: 1rem 1rem;
                                   font-size: 1.5rem;
                                          }
                                  `}
                                </style>

                                <Button variant="flat" size="lg">
                                    light/dark
                                </Button>
                            </>

                        </Nav>
                    </Navbar.Collapse>

                </Container>

            </Navbar>

        </div>
    );
};

export default Header;