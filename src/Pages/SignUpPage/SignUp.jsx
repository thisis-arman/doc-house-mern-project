import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="md:flex  md:h-screen ">
      <div className="bg-[#07332F] flex justify-center items-center md:w-1/2">
        <img className="w-1/2 mx-auto" src="../../../doc-house Assets/sign-up-page.png" alt="" />
      </div>
      
      <div className=" md:flex items-center justify-center md:w-1/2 mx-auto md:px-0 px-4 ">

      <form className="shadow border flex flex-col justify-center items-center  md:w-1/2 p-4 py-10 mx-auto rounded m-8">
        <h2 className="text-xl font-bold text-center">Sign Up to Doc House</h2>

      <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn w-full max-w-xs btn-secondary my-4">Create Account</button>
        <p>Already have an account? <Link to='/login' className="underline text-blue-500">Login</Link></p>
      </form>

        
      </div>
    </section>
  );
};

export default SignUp;
