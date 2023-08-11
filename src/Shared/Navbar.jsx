import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
  const {user,LogOut}=useContext(AuthContext)

  const handlelogOut =()=>{
    LogOut()
  }
    return (
        <div className="container mx-auto">
      

<header className="text-white relative z-10">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex  h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <a className="block "  >
          <span className="sr-only">Home</span>
          <Link className=" text-xl">
       <img className="w-28 md:w-full" src="../../doc-house Assets/menu-logo.png" alt="" />
      
      </Link>
        </a>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <Link to='/about'
                className=" transition  hover:border-b-2  hover:text-lime-400/75"
                 
              >
                About
              </Link>
            </li>

            <li>
              <Link to='/appointment'
                className=" transition  hover:border-b-2  hover:text-lime-400/75"
                 
              >
                Appointment
              </Link>
            </li>

            <li>
              <a
                className=" transition  hover:border-b-2  hover:text-lime-400/75"
                 
              >
                History
              </a>
            </li>

            <li>
              <Link
                className=" transition  hover:border-b-2  hover:text-lime-400/75"
                 
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                className=" transition  hover:border-b-2  hover:text-lime-400/75"
                 
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                className=" transition  hover:border-b-2  hover:text-lime-400/75"
                 
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
         {user?   <div className="sm:flex sm:gap-4">
          <Link to='dashboard'
            className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
             
          >
            Dashboard
          </Link>

          <div className="hidden sm:flex">
            <Link onClick={handlelogOut}
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
               
            >
              Sign Out
            </Link>
          </div>
        </div>
          :
          <div className="sm:flex sm:gap-4">
          <Link to='/sign-in'
            className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
             
          >
            Login
          </Link>

          <div className="hidden sm:flex">
            <Link to='/sign-up'
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
               
            >
              Register
            </Link>
          </div>
        </div>
         }
          <div className="dropdown ">
          <div tabIndex={0} className="block md:hidden">
            <button
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                  />
                  </svg>
                </button>
    
      
      <ul tabIndex={0} className="menu menu-sm dropdown-content right-0 mt-3 z-[1] p-2 shadow bg-black bg-opacity-40  rounded-box ">
      
   <Link to='/' className="mr-4 hover:bg-red-300">Home</Link>
   <Link to='/' className="mr-4 hover:bg-red-300">About</Link>
   <Link to='/appointment' className="mr-4 hover:bg-red-300">Appointment</Link>
   <Link to='/' className="mr-4 hover:bg-red-300">Login</Link>
    </ul>

    </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
        </div>
    );
};

export default Navbar;