import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Course = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/course-categories`)
        .then(res=>res.json())
        .then(data=>setCategories(data))
    })
    return (
        <div>
          <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                 <h4>Course Categories</h4>
                 {
                    categories.map((cat,index)=><h6 key={index}><Link to={`/category/${cat.id}`}>{cat.name}</Link></h6>)
                 }
                </div>
                <div className='col-md-8'>

                </div>

            </div>

          </div>
        </div>
    );
};

export default Course;