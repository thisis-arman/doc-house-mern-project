import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const HomeDashboard = () => {

  const { user } = useContext(AuthContext)
  console.log(user.email)


  const isAdmin = false;
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
        <div className="hidden md:block lg:block w-64 bg-black  text-white px-4   shadow-2xl shadow-black ">
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
