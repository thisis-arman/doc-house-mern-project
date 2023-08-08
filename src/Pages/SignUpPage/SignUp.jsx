import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const {createUser,updateUserProfile} =useContext(AuthContext)



  const handleSubmit =(event)=>{
    event.preventDefault()
   /*  const formData = new FormData(event.target.value)
    console.log(formData)  */

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photo,email,password)
    createUser(email,password)
    .then((result)=>{
      const createdUser = result.user;
      console.log(createdUser)
      alert("User Created Successfully")
      updateUserProfile(name,photo)
      .then(()=>{
        console.log("Updated User Details")
        
      })
    })
    .catch(err=>console.log(err))



  }



  return (
    <section className="md:flex  md:h-screen ">
      <div className="bg-[#07332F] flex justify-center items-center md:w-1/2">
        <img className="w-1/2 mx-auto" src="../../../doc-house Assets/sign-up-page.png" alt="" />
      </div>
      
      <div className=" md:flex items-center justify-center md:w-1/2 mx-auto md:px-0 px-4 ">

      <form onSubmit={handleSubmit} className="shadow border flex flex-col justify-center items-center  md:w-1/2 p-4 py-10 mx-auto rounded m-8">
        <h2 className="text-xl font-bold text-center">Sign Up to Doc House</h2>

      <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
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
            name="email"
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
            name="password"
            placeholder="Enter your password"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button type="submit" className="btn w-full max-w-xs btn-secondary my-4">Create Account</button>
        <p>Already have an account? <Link to='/login' className="underline text-blue-500">Login</Link></p>
      </form>

        
      </div>
    </section>
  );
};

export default SignUp;
