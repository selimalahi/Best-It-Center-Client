import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Course from "../../Pages/Course/Course";
import Details from "../../Pages/Course/Course";
import Coursedetails from "../../Pages/Coursedetails/Coursedetails";
import Home from "../../Pages/Home/Home/Home";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
             
            {
                path:'/courses',
                element:<Course></Course>,
                loader: () => fetch('http://localhost:5000/courses')

            },
            {
                path:'/course/:id',
                element:<Coursedetails></Coursedetails>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)

            }
        ]
    }
])