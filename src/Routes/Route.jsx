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
// import FitnessArticle from "../Pages/BlogPage/Blogs/FitnessArticle";
import { CircleIndicator } from "../Components/ScrollProgressBar";
import UpdateDetails from "../Layouts/Dashboard/DoctorDashboard/UpdateDetails";
import BecomeDoctor from "../Pages/BecomeDoctor/BecomeDoctor";
import DoctorHome from "../Layouts/Dashboard/DoctorDashboard/DoctorHome";
import AboutPage from "../Pages/AboutPage/AboutPage";
import UserAppointments from "../Layouts/Dashboard/UserDashboard/UserAppointments";
// import CheckoutForm from "../Layouts/Dashboard/UserDashboard/CheckoutForm";
import Payments from "../Layouts/Dashboard/UserDashboard/Payments";
import ContactPage from "../Pages/ContactPage/ContactPage";
import ServicesPage from "../Pages/ServicesPage/ServicesPage";
import DoctorRequest from "../Layouts/Dashboard/AdminDashboard/DoctorRequest";
import PrivateRoute from "./PrivateRoute";
import DoctorPage from "../Pages/DoctorPage/DoctorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'services',
        element: <ServicesPage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: 'doctor',
        element: <DoctorPage />
      },
      {
        path: '/appointment',
        element: <AppointmentPage />
      },
      {
        path: '/be-doctor',
        element: <BecomeDoctor />
      },
      {
        path: '/blog',
        element: <Blogs />,
        children: [

        ]
      },
      {
        path: '/blog/blog-one',
        element: <CircleIndicator />
      },
      {
        path: 'doctor/:id',
        element: <PrivateRoute><DoctorDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/api/all-info/${params.id}`)
      },

    ]
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/sign-in',
    element: <SignIn />
  },

  {
    path: '/dashboard',
    element: <HomeDashboard />,
    children: [

      // Admin Routes
      {
        path: '/dashboard/admin',
        element: <AdminHome />
      },

      {
        path: 'all-users',
        element: <AllUsers />
      },
      {
        path: 'add-doctor',
        element: <AddDoctor />
      },
      {
        path: 'doctor-request',
        element: <DoctorRequest />
      },

      // User Routes
      {
        path: 'user-home',
        element: <UserHome />
      },
      {
        path: 'my-appointments',
        element: <UserAppointments />
      },
      {
        path: 'my-review',
        element: <MyReview />
      },
      {
        path: "history",
        element: <MyHistory />
      },
      {
        path: 'my-appointments/payments/:id',
        element: <Payments />,
        loader: ({ params }) => fetch(`http://localhost:5000/api/appointment/${params.id}`)
      },
      // Doctor Routes
      {
        path: 'profile/:email',
        element: <UpdateDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/api/all-info-by/${params.email}`)
      },
      {
        path: 'doctor-home',
        element: <DoctorHome />
      },
      {
        path: 'appointments',
        element: <MyAppointments />
      },

    ]
  }

]);

export default router;