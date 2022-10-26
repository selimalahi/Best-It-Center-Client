import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

const Course = () => {
  const courses = useLoaderData();

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/course-categories`)
      .then(res => res.json())
      .then(data => setCategories(data))
  })
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h4>Course Categories</h4>
            {
              categories.map((cat, index) => <h6 key={index}><Link to={`/category/${cat.id}`}>{cat.name}</Link></h6>)
            }
          </div>
          <div className='col-md-8'>
            <div className='row'>
              {
                courses.map((course, index) =>
                  <div className='col-md-4' key={index}>
                    <div className='card mb-3'>
                      <div className='card-title'>
                        <Image src={course.image_url} style={{ height: '100px', width: '100%' }}></Image>
                      </div>
                      <div className='card-body'>
                        <h6 style={{ height: '20px' }}>{course.title}</h6><br />
                        <h6 style={{height:'30px'}}>Instructor: <small> {course.instructor}</small></h6>
                        <div className='d-flex justify-content-between' style={{height:'60px'}}>
                        <p>course_hours: {course.course_hours}</p>
                        <p><small>Price : {course.price}</small></p>
                        </div>
                      </div>
                      <Link to={`/course/${course._id}`} className='btn btn-primary'>Details</Link>
                    </div>


                  </div>
                )
              }

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Course;