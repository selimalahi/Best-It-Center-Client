import React from 'react';
import { useContext } from 'react';
import { Toast } from 'react-bootstrap';
import toast,{Toaster} from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const checkouts=()=>{
       alert('congratulations!')
    }
    const checkout=useLoaderData();
    const {title,course_hours,price}=checkout;
    const {user}=useContext(AuthContext)
    return (
        <div className='container'>
            <div className='card w-50 mx-auto'>
                <p>User Name: {user.displayName}</p>
                <p>User Email: {user.email}</p>
                <p>Course  Name: {title}</p>
                <p>Course Duration: {course_hours} Hours </p>
                <p>Course price: {price} Taka</p>
                <div>
                <button className='btn btn-secondary' onClick={checkouts}>Procced to Checkout</button>
              
                </div>
            </div>
            
        </div>
    );
};

export default Checkout;