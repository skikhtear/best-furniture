import { createBrowserRouter } from "react-router-dom";
import Login from "../../component/Login/Login";
import AllPayments from "../../component/Pages/Admin/AllPayments";
import AllProduct from "../../component/Pages/Admin/AllProduct";
import AllUsers from "../../component/Pages/Admin/AllUsers";
import AllProducts from "../../component/Pages/AllProducts/AllProducts";
import Home from "../../component/Pages/Home/Home";
import HomeFurniture from "../../component/Pages/HomeFurniture/HomeFurniture";
import HospitalFurniture from "../../component/Pages/HospitalFurniture/HospitalFurniture";
import MyCart from "../../component/Pages/MyCart/MyCart";
import OfficeFurniture from "../../component/Pages/OfficeFurniture/OfficeFurniture";
import Payment from "../../component/Pages/Payment/Payment";
import Product from "../../component/Pages/Product/Product";
import SignUp from "../../component/SignUp/SignUp";
import Dashboard from "../../Layout/Dashboard";
import Main from "../../Layout/Main";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/allproducts',
                element: <AllProducts></AllProducts>,
               

            },
            {
                path: '/homefurniture',
                element: <HomeFurniture></HomeFurniture>,
               

            },
            {
                path: '/officefurniture',
                element: <OfficeFurniture></OfficeFurniture>,
               

            },
            {
                path: '/hospitalfurniture',
                element: <HospitalFurniture></HospitalFurniture>,
               

            },
            {
                path: '/mycart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute> ,
               

            },
            {
                path: '/payment/:id',
                element: <PrivateRoute><Payment></Payment></PrivateRoute> ,
                loader: ({ params }) => fetch(`https://best-furniture-server.vercel.app/mycart/${params.id}`)             

            },
            {
                path: '/product/:id',
                element: <Product></Product>,
                loader: ({ params }) => fetch(`https://best-furniture-server.vercel.app/allproducts/${params.id}`)

               

            },
            {
                path: '/login',
                element: <Login></Login>,
               

            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
               

            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><AdminRoute><Dashboard></Dashboard></AdminRoute></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element:<AllUsers></AllUsers>
            },
            {
                path: '/dashboard/allproducts',
                element:<AllProduct></AllProduct>
            },
            {
                path: '/dashboard/allpayments',
                element:<AllPayments></AllPayments>
            },
        ]
    }
])
export default router;