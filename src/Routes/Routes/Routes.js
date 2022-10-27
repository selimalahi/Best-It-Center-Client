import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import Checkout from "../../Pages/Checkout/Checkout";
import Course from "../../Pages/Course/Course";
import Details from "../../Pages/Course/Course";
import Coursedetails from "../../Pages/Coursedetails/Coursedetails";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://fullstack-server-side.vercel.app/category/${params.id}`)
            },

            {
                path: '/courses',
                element: <Course></Course>,
                loader: () => fetch('https://fullstack-server-side.vercel.app/courses')

            },
            {
                path: '/course/:id',
                element: <Coursedetails></Coursedetails>,
                loader: ({ params }) => fetch(`https://fullstack-server-side.vercel.app/course/${params.id}`)

            },
            {
                path: '/course-checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://fullstack-server-side.vercel.app/course/${params.id}`)

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ]
       
      
    },
    { path: '*', element: <div className="text-center mt-10">This Route Not Found</div>}
  

])