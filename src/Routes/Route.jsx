import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/HomePage/Home";
import DoctorDetails from "../Pages/DetailsPage/DoctorDetails";
import SignUp from "../Pages/SignUpPage/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AppointmentPage from "../Pages/AppointmentPage/AppointmentPage";
import HomeDashboard from "../Layouts/Dashboard/Homedashboard";
import AdminHome from "../Layouts/Dashboard/AdminDashboard/AdminHome";
import SignIn from "../Pages/SignInPage/SignIn";
import MyAppointments from "../Layouts/Dashboard/UserDashboard/MyAppointments";
import UserHome from "../Layouts/Dashboard/UserDashboard/UserHome";
import MyReview from "../Layouts/Dashboard/UserDashboard/MyReview";
import MyHistory from "../Layouts/Dashboard/UserDashboard/MyHistory";
import AllUsers from "../Layouts/Dashboard/AdminDashboard/AllUsers";
import AddDoctor from "../Layouts/Dashboard/AdminDashboard/AddDoctor";
import Blogs from "../Pages/BlogPage/Blogs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/appointment',
          element:<AppointmentPage/>
        },
        {
          path:'/blog',
          element:<Blogs/>
        },
        {
          path:'doctor/:id',
          element:<DoctorDetails/>,
          loader:({params})=>fetch(`http://localhost:5000/doctors/${params.id}`)
        },
        
      ]
    },
    {
      path:'/sign-up',
      element:<SignUp/>
    },
    {
      path:'/sign-in',
      element:<SignIn/>
    },
    
    {
      path:'/dashboard',
      element:<HomeDashboard/>,
      children:[
        {
          path:'/dashboard/admin',
          element:<AdminHome/>
        },
        {
        path:'all-users',
        element:<AllUsers/>
        },
        {
          path:'add-doctor',
          element:<AddDoctor/>
        },
        {
          path:'my-appointments',
          element:<MyAppointments/>
        },
        {
          path:'user-home',
          element:<UserHome/>
        },
        {
          path:'my-review',
          element:<MyReview/>
        },
        {
          path:"my-history",
          element:<MyHistory/>
        }
      ]
    }
   
  ]);

  export default router;