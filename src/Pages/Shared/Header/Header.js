import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image from './logo.png';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect className='mb-5' expand="lg" bg="light" variant="light">
            <Container>
                <img src={image} className="img"  style={{width:"80px"}} alt="" />
                <Navbar.Brand href="#home">BEST IT CENTER</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Home</Nav.Link>
                        <Nav.Link href="#deets">Courses</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                           FAQ
                        </Nav.Link>
                        <Nav.Link href="#deets">Blog</Nav.Link>
                        <Nav.Link href="#deets">Login</Nav.Link>
                     
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;