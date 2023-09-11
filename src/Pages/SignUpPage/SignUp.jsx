import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    /*  const formData = new FormData(event.target.value)
     console.log(formData)  */

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password)
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser)
        toast.success("User Created Successfully")
        updateUserProfile(name, photo)
          .then(() => {
            const saveUser = { name, email, photo, role: "user" }
            fetch('http://localhost:5000/users', {
              method: "POST",
              headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId)
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Sign up successfully',
                    showConfirmButton: false,
                    timer: 2000
                  })
              })
            navigate('/')
          })
      })
      .catch(err => console.log(err))



  }



  return (
    <section className="md:flex  md:h-screen ">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
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
