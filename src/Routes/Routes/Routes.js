import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import HomeServices from "../../Pages/Home/HomeServices/HomeServices";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import UpdateReview from "../../Pages/Reviews/UpdateReview";
import AddProduct from "../../Pages/Services/AddProduct/AddProduct";
import ServiceDetails from "../../Pages/Services/Services/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services/Services";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
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
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/reviews',
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
            },
            {
                path: '/add-service',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/services',
                element: <Services></Services>,
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) =>{
                    return fetch(`http://localhost:5000/services/${params.id}`)
                }
            },
            {
                path: '/home-services',
                element: <HomeServices></HomeServices>
            },
            {
                path: '/review-update',
                element: <UpdateReview></UpdateReview>
            },

        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default routes;