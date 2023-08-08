import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="navbar  relative md:px-16 text-white z-10 bg-[#07332F] ">
  <div className=" w-full flex flex-row-reverse justify-between px-8  ">
    <div className="dropdown">
      <label tabIndex={0} className=" navbar-end md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-20  rounded-box w-52">
      
   <Link to='/' className="mr-4 hover:bg-red-300">Home</Link>
   <Link to='/' className="mr-4 hover:bg-red-300">About</Link>
   <Link to='/appointment' className="mr-4 hover:bg-red-300">Appointment</Link>
   <Link to='/' className="mr-4 hover:bg-red-300">Login</Link>
    </ul>

    </div>
    <Link className=" text-xl">
       <img src="../../doc-house Assets/menu-logo.png" alt="" />
      
      </Link>
  </div>
  {/* <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   <Link>Home</Link>
   <Link>About</Link>
   <Link>Appointment</Link>
   <Link>Login</Link>
    </ul>
  </div> */}
  <div className="md:navbar-end ">
  <ul className="menu menu-horizontal px-1 hidden md:block">
   <Link to='/' className="mr-4">Home</Link>
   <Link to='/' className="mr-4">About</Link>
   <Link to='/appointment' className="mr-4">Appointment</Link>
   <Link to='/' className="mr-4">Login</Link>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;