import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/HomePage/Home";
import DoctorDetails from "../Pages/DetailsPage/DoctorDetails";
import SignUp from "../Pages/SignUpPage/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
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
    }
   
  ]);

  export default router;