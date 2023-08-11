

const AddDoctor = () => {




  const handleSubmit = (event) => {
    event.preventDefault()



    const form = event.target;
    // const name = form.name.value;
    // const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)




  }
  return (
    <div>

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
        <button type="submit" className="btn w-full max-w-xs btn-secondary my-4">ADD </button>

      </form>


    </div>
  );
};

export default AddDoctor;