import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout.jsx/HomeLayout";
import ErrorPage from "../pages/ErrorPage";
import AuthLayout from "../layout.jsx/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import Home from "../components/Home";
import AllModel from "../pages/AllModel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:3000/latest-model')
      },
      {
        path:'/all-model',
        element:<AllModel></AllModel>,
        loader:()=>fetch('http://localhost:3000/models')
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      },
      {
        path:'/auth/forget-pass',
        element:<ForgetPassword></ForgetPassword>
      }
    ]
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;