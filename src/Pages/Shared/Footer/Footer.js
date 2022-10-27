import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaFacebook, FaWhatsapp, FaYoutube, FaLinkedin } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';


const Footer = () => {
    return (
        <div className='footer-container'>
            <Container>
                <Row>
                    <Col lg="3">
                        <h3>Contacts Us</h3>
                        <p><FaPhoneAlt></FaPhoneAlt> 01309-059764 / 01839635707</p>
                        <p>info@bic.edu</p>
                        <p>best@itcenter.edu</p>
                    </Col>
                    <Col lg="3">
                        <h3>Address </h3>
                        <p>Level-10, 2, Dhaka-Uddan, Dhaka</p>

                    </Col>
                    <Col lg="3">
                        <h3>  UpComing Course </h3>
                        <ul>
                            <li>Web Development</li>
                            <li>Data Science </li>
                            <li>App Development</li>
                            <li>NetWorking</li>
                            <li>Crash Course</li>

                        </ul>

                    </Col>
                    <Col lg="3">
                        <div>
                            <h5>Follow Social Media Platform</h5>
                             <p><FaFacebook></FaFacebook></p>
                             <p><FaLinkedin></FaLinkedin></p>
                             <p><FaYoutube></FaYoutube></p>
                             <p><FaWhatsapp></FaWhatsapp></p>
                        </div>

                    </Col>
                </Row>
                <p style={{ textAlign: 'center' }}><small>Copyright © 2022 Best It Center</small></p>
            </Container>

        </div>

    );
};

export default Footer;