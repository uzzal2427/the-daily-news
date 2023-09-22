import {
    Navigate,
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import MainLayout from "../layout/MainLayout";
import PageLayout from "../layout/PageLayout";
import News from "../pages/Home/News/News";
import Category from "../pages/Home/Categories/Category";
import Login from "../pages/Home/Login/Login";
import LoginLayout from "../layout/LoginLayout";
import Registation from "../pages/Home/Registation/Registation";

const router = createBrowserRouter([
    {
        path:'/',
        element: <LoginLayout></LoginLayout>,
        children:[
            {
                path:'/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Registation></Registation>
            }
        ]
    },
    {
        path: "/category",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:3000/categories/${params.id}`)
            },
        ]
    },
    {
        path: '/news',
        element: <PageLayout></PageLayout>,
        children: [
            {
                path: ':id',
                element: <News></News>,
                loader: ({ params }) => fetch(`http://localhost:3000/news/${params.id}`)
            }
        ]
    },
   
]);

export default router