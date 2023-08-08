import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SignIn = () => {
  const {signIn} =useContext(AuthContext)



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
    signIn(email,password)
    .then((result)=>{
      const loggedUser = result.user;
      console.log(loggedUser)
      alert("Signed In Successfully")
    
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
        <h2 className="text-xl font-bold text-center">Sign In to Doc House</h2>
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
        <button type="submit" className="btn w-full max-w-xs btn-secondary my-4">Sign In</button>
        <p>New Here? <Link to='/sign-up' className="underline text-blue-500">Sign Up</Link></p>
      </form>

        
      </div>
    </section>
  );
};

export default SignIn;