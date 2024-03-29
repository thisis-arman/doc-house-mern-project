import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { motion } from "framer-motion";
import { BiMoon, BiSun } from 'react-icons/bi'
import useAdmin from "../Hooks/useAdmin";
import useDoctor from "../Hooks/useDoctor";




const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isAdmin] = useAdmin()
  const [isDoctor] = useDoctor()
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const { user, LogOut } = useContext(AuthContext)





  useEffect(() => {
    // Function to check if the user prefers dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set the initial theme based on user preference
    setIsDarkMode(prefersDarkMode);

    // Listen for changes in theme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addListener(handleChange);

    // Clean up the listener when the component unmounts
    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, []);



  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
      console.log('Dark clicked')
    } else {
      setTheme("light");
      console.log('light clicked')
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  console.log({ isDarkMode })


  const handleLogOut = () => {
    LogOut()
  }

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };
  return (
    <div className="container  sticky  mx-auto z-10">


      <header className="bg-sky-200 rounded-lg text-black ">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <Link className=" text-xl">
                  <img className="w-28 md:w-full" src="https://i.ibb.co/41nz7fv/logo.png" alt="" />

                </Link>
              </a>
            </div>


            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">

                <ul className="flex items-center gap-6 text-sm">
                  <motion.li
                    variants={variants}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to='/about'
                      className=" transition  hover:border-b-2  hover:text-yellow-500"

                    >
                      About
                    </Link>
                  </motion.li>

                  <motion.li
                    variants={variants}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to='/appointment'
                      className=" transition  hover:border-b-2  hover:text-yellow-500"

                    >
                      Appointment
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={variants}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.95 }}>

                    <Link to='guides'>
                      <a
                        className=" transition  hover:border-b-2  hover:text-yellow-500"

                      >
                        Guides
                      </a>
                    </Link>
                  </motion.li>

                  <motion.li
                    variants={variants}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to='services'
                      className=" transition  hover:border-b-2  hover:text-yellow-500"

                    >
                      Services
                    </Link>
                  </motion.li>

                  <motion.li
                    variants={variants}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to='/doctor'
                      className=" transition  hover:border-b-2  hover:text-yellow-500"

                    >
                      Doctors
                    </Link>
                  </motion.li>

                  <motion.li
                    variants={variants}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to='/be-doctor'
                      className=" transition  hover:border-b-2  hover:text-yellow-500"

                    >
                      Be Doctor
                    </Link>
                  </motion.li>


                  {user ? <div className="sm:flex sm:gap-4">

                    <Link to={

                      isAdmin ? "/dashboard/admin" : isDoctor ? "/dashboard/doctor-home" : "/dashboard/user-home"
                    }
                      className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"

                    >
                      Dashboard
                    </Link>



                    <div className="hidden sm:flex">
                      <Link onClick={handleLogOut}
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
                  <motion.li
                    variants={variants}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <label className="swap swap-rotate w-12 h-12">
                      <input type="checkbox"

                        onChange={handleToggle}
                      />
                      {/* light theme sun image */}
                      <BiSun className="w-8 h-8 swap-off" />
                      {/* dark theme moon image */}
                      <BiMoon className='h-8 w-8 swap-on' />
                    </label>
                  </motion.li>
                </ul>


              </nav>
              <div className="flex items-center gap-4">
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

                      <Link to='/' className="mr-4 p-1 rounded-lg hover:bg-red-200">Home</Link>
                      <Link to='/about' className="mr-4 p-1 rounded-lg hover:bg-red-200">About</Link>
                      <Link to='/appointment' className="mr-4 p-1 rounded-lg hover:bg-red-200">Appointment</Link>
                      <Link to='/sign-in' className="mr-4 hover:bg-red-200">Login</Link>
                      {user ? <div className="sm:flex sm:gap-4">

                        <Link to='dashboard'
                          className="rounded-md  px-5 py-2.5 text-sm font-medium text-white shadow"

                        >
                          Dashboard
                        </Link>



                        <div className="hidden sm:flex">
                          <Link onClick={handleLogOut}
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


{/* <header className="mt-1   rounded-full  w-full   z-10">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex  h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <a className="block "  >
          <span className="sr-only">Home</span>
          <Link className=" text-xl">
            <img className="w-28 md:w-full" src="https://i.ibb.co/41nz7fv/logo.png" alt="" />

          </Link>
        </a>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">

          <ul className="flex items-center gap-6 text-sm">
            <motion.li
              variants={variants}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to='/about'
                className=" transition  hover:border-b-2  hover:text-yellow-500"

              >
                About
              </Link>
            </motion.li>

            <motion.li
              variants={variants}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to='/appointment'
                className=" transition  hover:border-b-2  hover:text-yellow-500"

              >
                Appointment
              </Link>
            </motion.li>
            <motion.li
              variants={variants}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}>

              <Link to='contact'>
                <a
                  className=" transition  hover:border-b-2  hover:text-yellow-500"

                >
                  Contact
                </a>
              </Link>
            </motion.li>

            <motion.li
              variants={variants}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to='services'
                className=" transition  hover:border-b-2  hover:text-yellow-500"

              >
                Services
              </Link>
            </motion.li>

            <motion.li
              variants={variants}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to='/doctor'
                className=" transition  hover:border-b-2  hover:text-yellow-500"

              >
                Doctors
              </Link>
            </motion.li>

            <motion.li
              variants={variants}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to='/blog'
                className=" transition  hover:border-b-2  hover:text-yellow-500"

              >
                Blog
              </Link>
            </motion.li>


            {user ? <div className="sm:flex sm:gap-4">

              <Link to={
                isAdmin
                  ? "/dashboard/admin"
                  : isDoctor
                    ? "/dashboard/doctor-home"
                    : "/dashboard/user-home"
              }
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"

              >
                Dashboard
              </Link>



              <div className="hidden sm:flex">
                <Link onClick={handleLogOut}
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
          </ul>


        </nav>

        <div className="flex items-center gap-4">

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
                {user ? <div className="sm:flex sm:gap-4">

                  <Link to='dashboard'
                    className="rounded-md  px-5 py-2.5 text-sm font-medium text-white shadow"

                  >
                    Dashboard
                  </Link>



                  <div className="hidden sm:flex">
                    <Link onClick={handleLogOut}
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
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>  */}