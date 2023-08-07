import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="navbar relative px-16 text-white z-10  ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-20  rounded-box w-52">
      
   <Link to='/' className="mr-4 hover:bg-red-300">Home</Link>
   <Link to='/' className="mr-4 hover:bg-red-300">About</Link>
   <Link to='/appointment' className="mr-4 hover:bg-red-300">Appointment</Link>
   <Link to='/' className="mr-4 hover:bg-red-300">Login</Link>
    </ul>
    </div>
    <a className="btn btn-ghost normal-case text-white text-xl"><img src="../../doc-house Assets/menu-logo.png" alt="" /></a>
  </div>
  {/* <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   <Link>Home</Link>
   <Link>About</Link>
   <Link>Appointment</Link>
   <Link>Login</Link>
    </ul>
  </div> */}
  <div className="navbar-end">
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