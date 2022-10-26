import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import './Coursedetails.css';

const Coursedetails = () => {
    const coursedetails=useLoaderData();
    const{_id, category_id, title, course_hours, instructor, price, image_url, description, requirements, course_feature}= coursedetails;
    return (
        <div>
            <Container>
                <div className='card-body'>
                {/* <Image src={course.image_url} style={{ height: '100px', width: '100%' }}></Image> */}
                <img src={image_url} style={{ height: '250px', width: '100%' }} alt="" />
                <h3>Title : {title}</h3>
                <h4>Course_Id : {_id}</h4>
                <h4>Instructor :{instructor}</h4>
                <h4>Course_hours : {course_hours}</h4>
                <p> Description : {description}</p>
                <p> Requirements : {requirements}</p>
                <p> Course_feature : {course_feature}</p>

                </div>
            </Container>
        </div>
    );
};

export default Coursedetails;