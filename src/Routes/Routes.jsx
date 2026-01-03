import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout.jsx/HomeLayout";
import ErrorPage from "../pages/ErrorPage";
import AuthLayout from "../layout.jsx/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import Home from "../components/Home";
import AllModel from "../pages/AllModel";
import Loading from "../pages/Loading";
import PrivateRoute from "../provider/PrivateRoute";
import ModelDetails from "../pages/ModelDetails";
import AddModel from "../pages/AddModel";
import UpdateModel from "../pages/UpdateModel";
import MyModel from "../pages/MyModel";
import MyPurchases from "../pages/MyPurchases";
import CardSkeleton from "../components/CardSkeleton";
import DashboardLayout from "../layout.jsx/DashboardLayout";
import DashboardOverview from "../components/DashboardOverview";
import Profile from "../pages/Profile";
import Contact from "../components/ExtraPAge/Contact";
import Privacy from "../components/ExtraPAge/Privacy";
import HelpCenter from "../components/ExtraPAge/HelpCenter";
import About from "../components/ExtraPAge/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://my-assignment-server-two.vercel.app/latest-model'),
        hydrateFallbackElement: <CardSkeleton></CardSkeleton>
      },
      {
        path: '/all-model',
        element: <AllModel></AllModel>,
        loader: () => fetch('https://my-assignment-server-two.vercel.app/models'),
        hydrateFallbackElement: <CardSkeleton></CardSkeleton>
      },
      {
        path: '/add-model',
        element: <PrivateRoute><AddModel></AddModel></PrivateRoute>
      },
      {
        path: '/model/:id',
        element: <PrivateRoute>
          <ModelDetails></ModelDetails>
        </PrivateRoute>,
      },
      {
        path: '/update-model/:id',
        element: <PrivateRoute>
          <UpdateModel></UpdateModel>
        </PrivateRoute>,
      },
      {
        path:'/my-model',
        element:<PrivateRoute>
          <MyModel></MyModel>
        </PrivateRoute>
      },
      {
        path:'/purchases',
        element:<PrivateRoute>
          <MyPurchases></MyPurchases>
        </PrivateRoute>
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
        path: '/auth/forget-pass',
        element: <ForgetPassword></ForgetPassword>
      }
    ]
  },
  {
    path:'/dashboard',
    element:<PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children:[
      {
        path:'/dashboard',
        index:true,
        element:<DashboardOverview></DashboardOverview>
      },
      {
        path:'profile',
        element:<Profile></Profile>
      }
    ]
  },
  {
    path:'/contact',
    element:<Contact></Contact>
  },
  {
    path:'privacy',
    element:<Privacy></Privacy>
  },
  {
    path:'about',
    element : <About></About>
  },
  {
    path:'help',
    element:<HelpCenter></HelpCenter>
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;