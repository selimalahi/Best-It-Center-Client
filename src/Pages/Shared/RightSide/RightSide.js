import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaTwitter, FaTwitch, FaWhatsapp, FaYoutube, FaLinkedin,FaInstagram } from 'react-icons/fa';

const RightSide = () => {
    return (
        <div>
            <h5>Follow Social Media Platform</h5>
            <ListGroup variant="flush">
                <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-2'> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-2'> <FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                <ListGroup.Item className='mb-2'> <FaYoutube></FaYoutube> YouTube</ListGroup.Item>
                <ListGroup.Item className='mb-2'> <FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
                <ListGroup.Item className='mb-2'> <FaLinkedin></FaLinkedin> LinkedIn</ListGroup.Item>
                <ListGroup.Item className='mb-2'> <FaInstagram></FaInstagram> InstaGram</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default RightSide;