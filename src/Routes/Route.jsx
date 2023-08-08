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
          path:'/doctor/:id',
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
        }
      ]
    }
   
  ]);

  export default router;