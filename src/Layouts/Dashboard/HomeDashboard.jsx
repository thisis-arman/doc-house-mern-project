import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const HomeDashboard = () => {

  const {user} =useContext(AuthContext)

  
    const isAdmin =false;

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openDrawer = () => {
      setIsDrawerOpen(true);
    };
  
    const closeDrawer = () => {
      setIsDrawerOpen(false);
    };


const sidebarMenu =(
    <div>
    <div className="p-4">
    <h2 className="text-xl font-bold mb-4">
    <img src="../../../doc-house Assets/logo.png" alt="" />
    </h2>

    {isAdmin?<ul className="space-y-2 flex flex-col my-8">
      <Link to='admin'>
        <a  className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
          Dashboard
        </a>
      </Link>
      <Link>
        <a  className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
          All User
        </a>
      </Link>
      <Link>
        <a  className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
          Add a Doctor
        </a>
      </Link>
      <Link>
        <a  className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
         Manage Doctor
        </a>
      </Link>
    </ul>
    :
    <ul className="space-y-2 flex flex-col my-8">
      <Link to='user-home'>
        <a  className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
          Dashboard
        </a>
      </Link>
      <Link to='my-appointments'>
        <a  className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
          My Appointments
        </a>
      </Link>
      <Link to="my-review">
        <a  className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
          My Reviews
        </a>
      </Link>
      <Link to="my-history">
        <a  className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
          My History
        </a>
      </Link>
    </ul>

    
    }

  </div>
  <div className="relative inset-x-0 bottom-0 border-t border-gray-100">
    <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
      <img
        alt="Man"
        src={user?.photoURL}
        className="h-10 w-10 rounded-full object-cover"
      />

      <div>
        <p className="text-xs">
          <strong className="block font-medium">{user.displayName}</strong>

          <span> {user.email}</span>
        </p>
      </div>
    </a>
  </div>
  </div>
)

  return (
    <div>
  <div className="flex h-screen hover:bg-gray-100">
      {/* Sidebar for medium and large screens */}
      <div className="hidden md:block lg:block w-64 bg-white shadow-lg">
        {/* Sidebar content */}
      {sidebarMenu}
      </div>

      {/* Main content */}
      <div className="flex-grow p-8">
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
        <div>
            <Outlet/>
        </div>
        <p>This is the main content area.</p>
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
        <div className="md:hidden lg:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300">
             {sidebarMenu}
        </div>
      )}
    </div>




</div>
  );
};

export default HomeDashboard;
