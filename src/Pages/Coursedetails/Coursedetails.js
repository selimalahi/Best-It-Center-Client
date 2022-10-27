import React from 'react';
import './Coursedetails.css';
import { Button, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";


const ref = React.createRef();




const Coursedetails = () => {

    const coursedetails = useLoaderData();
    const { _id, title, course_hours, instructor, price, image_url, description, requirements, course_feature } = coursedetails;



    return (
        <div>
            <Container>
                <div className='card-body' ref={ref}>

                    <img src={image_url} style={{ height: '250px', width: '100%' }} alt="" />
                    <div className='d-flex justify-between'>
                        <h3>Title : {title}</h3>
                        <Link to={`/course-checkout/${_id}`} className='btn btn-primary'>Get Premium Access</Link>
                    </div>
                    <h4>Course_Id : {_id}</h4>
                    <h4>Instructor :{instructor}</h4>
                    <h4>Course_hours : {course_hours}</h4>
                    <p>Price : {price}</p>
                    <p> Description : {description}</p>
                    <p> Requirements : {requirements}</p>
                    <p> Course_feature : {course_feature.map((cf, index) => <h6 key={index}> {index + 1} {cf}</h6>)}</p>

                    <div>
                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
                        </Pdf>
                    </div>
                </div>


            </Container>



        </div>
    );
};

export default Coursedetails;