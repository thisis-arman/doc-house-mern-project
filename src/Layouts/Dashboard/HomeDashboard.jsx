import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
// import useAdmin from "../../Hooks/useAdmin";
// import useDoctor from "../../Hooks/useDoctor";

const HomeDashboard = () => {
  // const [isAdmin] = useAdmin()
  // const [isDoctor] = useDoctor()

  const { user } = useContext(AuthContext)
  console.log(user.email)

  // console.log(isDoctor)
  const isAdmin = true;
  const isDoctor = false;



  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };


  const sidebarMenu = (
    <div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">
          <Link to='/'> <img src="https://i.ibb.co/fHGPb2R/logo.png" alt="" /></Link>
        </h2>

        {isAdmin ?
          <ul className="space-y-2 flex flex-col my-8">
            <Link to='admin'>
              <a className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium ">
                Dashboard
              </a>
            </Link>
            <Link to='all-users'>
              <a className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium ">
                All User
              </a>
            </Link>
            <Link to='add-doctor'>
              <a className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium ">
                Add a Doctor
              </a>
            </Link>
            <Link to='doctor-request'>
              <a className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium ">
                Doctor Request
              </a>
            </Link>

            <Link>
              <a className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium ">
                Manage Doctor
              </a>
            </Link>
          </ul>
          :
          isDoctor ?

            <ul className="space-y-2 flex flex-col my-8">
              <Link to='doctor-home'>
                <a className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium ">
                  Dashboard
                </a>
              </Link>
              <Link to={`appointments`}>
                <a className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium ">
                  My Appointments
                </a>
              </Link>
              <Link to='my-services'>
                <a className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium ">
                  My Services
                </a>
              </Link>
              <Link to='add-service'>
                <a className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium ">
                  Add Service
                </a>
              </Link>
              {/*  to={`/class/${cls._id}`} */}
              <Link to={`profile/${user.email}`}>
                <a className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium ">
                  My Profile
                </a>
              </Link>
              <Link>
                <a className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium ">
                  Manage Doctor
                </a>
              </Link>
            </ul>
            :
            <ul className="space-y-2 flex flex-col my-8">
              <Link to='user-home'>
                <a className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium ">
                  Dashboard
                </a>
              </Link>
              <Link to='my-appointments'>
                <a className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium ">
                  My Appointments
                </a>
              </Link>
              <Link to="my-review">
                <a className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium ">
                  My Reviews
                </a>
              </Link>
              <Link to="history">
                <a className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium ">
                  History
                </a>
              </Link>
            </ul>


        }

      </div>
      <div className="relative inset-x-0 bottom-0 border-t border-gray-100">
        <a href="#" className="flex items-center gap-2  p-4 ">
          <img
            alt="Man"
            src={user?.photoURL}
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <p className="text-xs">
              <strong className="block font-medium">{user?.displayName}</strong>

              <span> {user?.email}</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  )

  return (
    <div className="">
      <div className="flex min-h-screen  ">
        {/* Sidebar for medium and large screens */}
        <div className="hidden md:block lg:block w-64 bg-gray-100 px-4   ">
          {/* Sidebar content */}
          {sidebarMenu}
        </div>

        {/* Main content */}
        <div className="flex-grow ">
          {/* Button to open Drawer on small screens */}
          <div className="md:hidden lg:hidden flex justify-end">
            <button
              onClick={openDrawer}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Open Drawer
            </button>
          </div>
          {/* Content */}
          <div className="">
            {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

            <header className="bg-gray-50">
              <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex items-center justify-end gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <label className="sr-only" htmlFor="search"> Search </label>

                      <input
                        className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                        id="search"
                        type="search"
                        placeholder="Search website..."
                      />

                      <button
                        type="button"
                        className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                      >
                        <span className="sr-only">Search</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </button>
                    </div>

                    <a
                      href="#"
                      className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                    >
                      <span className="sr-only">Notifications</span>
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
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </a>
                  </div>

                  <span
                    aria-hidden="true"
                    className="block h-6 w-px rounded-full bg-gray-200"
                  ></span>

                  <a href="#" className="block shrink-0">
                    <span className="sr-only">Profile</span>
                    <img
                      alt="Man"
                      src={user.photoURL}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </a>
                </div>

                <div className="mt-8">
                  <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Welcome Back,{user?.displayName}!
                  </h1>

                  <p className="mt-1.5 text-sm text-gray-500">
                    Wish You A Very Good Day🚀
                  </p>
                </div>
              </div>
            </header>
            <Outlet />
          </div>
          {/* <p>This is the main content area.</p> */}
        </div>

        {/* Drawer overlay */}
        {isDrawerOpen && (
          <div
            onClick={closeDrawer}
            className="fixed inset-0 bg-black bg-opacity-25 z-20"
          ></div>
        )}

        {/* Mobile Drawer */}
        {isDrawerOpen && (
          <div className="md:hidden lg:hidden fixed inset-y-0 right-0 w-64 bg-base-200 shadow-lg transform transition-transform duration-300">
            {sidebarMenu}
          </div>
        )}
      </div>




    </div>
  );
};

export default HomeDashboard;
