import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
const Category = () => {
    const categories = useLoaderData();
    const [Categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/course-categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    })
    return (
        <div>
            <div className="container">
                <div className='row'>
                    <div className='col-md-4'>
                        <h3>Course Categories</h3>
                        {
                        Categories.map((cate,index)=><h6><Link to={`/category/${cate.id}`} key={index}>{cate.name}</Link></h6>)

                        }
                       
                    </div>
                    <div className='col-md-8'>
                        <div className='row'>

                            {
                                categories.map((cat, index) =>
                                    <div className='col-md-6' key={index}>
                                        <div className='card mb-3'>
                                            <div className='card-title'>
                                                <Image src={cat.image_url} style={{ height: '100px', width: '100%' }}></Image>
                                            </div>
                                            <div className='card-body'>
                                                <h6 style={{ height: '20px' }}>{cat.title}</h6><br />
                                                <h6 style={{ height: '30px' }}>Instructor: <small> {cat.instructor}</small></h6>
                                                <div className='d-flex justify-content-between' style={{ height: '60px' }}>
                                                    <p>course_hours: {cat.course_hours}</p>
                                                    <p><small>Price : {cat.price}</small></p>
                                                </div>
                                            </div>
                                            <Link to={`/course/${cat._id}`} className='btn btn-primary'>Details</Link>
                                        </div>


                                    </div>)
                            }

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Category;