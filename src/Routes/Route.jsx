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
// import UpdateDetails from "../Layouts/Dashboard/DoctorDashboard/UpdateDetails";
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
import NewDoctorDetails from "../Pages/NewDoctorDetails.jsx/NewDoctorDetails";
import AddService from "../Layouts/Dashboard/DoctorDashboard/AddService";
import MyServices from "../Layouts/Dashboard/DoctorDashboard/MyServices";
import DoctorServiceDetails from "../Layouts/Dashboard/AdminDashboard/DoctorServiceDetails";
import BookAppointment from "../Pages/BookAppointment/BookAppointment";
import MyProfile from "../Layouts/Dashboard/DoctorDashboard/MyProfile";
import AllServices from "../Layouts/Dashboard/AdminDashboard/AllServices";
import GuidePage from "../Pages/GuidePage/Guides/GuidePage";
import Kidney from "../Pages/GuidePage/Guides/Kidney";

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
        path: 'guides',
        element: <GuidePage />
      },
      {
        path: '/guides/kidney-guideline',
        element: <Kidney />
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
        path: '/book-appointment/:id',
        element: <BookAppointment />,
        loader: ({ params }) => fetch(`https://doc-house-server-thisis-arman.vercel.app/api/services-by/${params.id}`)

      },
      {
        path: '/blog/blog-one',
        element: <CircleIndicator />
      },
      {
        path: 'doctor/:id',
        element: <PrivateRoute><DoctorDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://doc-house-server-thisis-arman.vercel.app/api/all-info/${params.id}`)
      },
      {
        path: '/doctors/:doctorID',
        element: <NewDoctorDetails />,
        loader: ({ params }) => fetch(`https://doc-house-server-thisis-arman.vercel.app/services/${params.doctorID}`)
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
        path: 'all-services',
        element: <AllServices />
      },
      {
        path: 'add-doctor',
        element: <AddDoctor />
      },
      {
        path: 'doctor-request',
        element: <DoctorRequest />,
        children: [


        ]
      },
      {
        path: '/dashboard/doctor-request/services-request/:doctorEmail',
        element: <DoctorServiceDetails />,
        loader: () => fetch(`https://doc-house-server-thisis-arman.vercel.app/api/services`)
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
        loader: ({ params }) => fetch(`https://doc-house-server-thisis-arman.vercel.app/api/appointment/${params.id}`)
      },
      // Doctor Routes
      {
        path: 'profile/:email',
        element: <MyProfile />,
        loader: ({ params }) => fetch(`https://doc-house-server-thisis-arman.vercel.app/api/all-info-by/${params.email}`)
      },
      {
        path: 'doctor-home',
        element: <DoctorHome />
      },
      {
        path: 'add-service',
        element: <AddService />
      },
      {
        path: 'my-services',
        element: <MyServices />
      },
      {
        path: 'appointments',
        element: <MyAppointments />
      },

    ]
  }

]);

export default router;