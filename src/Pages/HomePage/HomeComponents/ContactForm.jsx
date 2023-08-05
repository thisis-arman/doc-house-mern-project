

const ContactForm = () => {
    return (
        <div className="container mx-auto relative top-20">
            <div className="hero min-h-screen text-white bg-[#07332F] ">
  <div className="md:px-20 px-4 md:flex items-center gap-12 ">
    <div className="text-center md:w-2/5  lg:text-left">
      <h1 className="text-5xl font-bold">Contact With Us!</h1>
      <p className="py-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
      <div className="flex gap-4 py-2">
        <img className="w-6 h-6" src="../../../../doc-house Assets/phone-alt.png" alt="" />
        <p>+880182745982</p>
      </div>
      <div className="flex gap-4 py-2">
        <img src="../../../../doc-house Assets/location.png" alt="" />
        <p>+Dhanmondi, Dhaka, Bangladesh</p>
      </div>
    </div>

    <div className="card flex-shrink-0 md:w-3/5 w-full  shadow-2xl ">
      <div className="card-body grid grid-cols-2">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"  placeholder="Name" name="name" className="input input-bordered text-black bg-[#18433f]" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text"  placeholder="email" className="input input-bordered text-black bg-[#18433f]" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mobile Number</span>
          </label>
          <input type="number"  placeholder="Number" name="number" className="input input-bordered bg-[#18433f] text-black" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Doctor Name</span>
          </label>
          <input type="text"  placeholder="Doctor name" name="doctor" className="input input-bordered text-black bg-[#18433f]" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date"  placeholder="date" name="date" className="input input-bordered text-black bg-[#18433f]" />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Time</span>
          </label>
          <input type="time" placeholder="time" name="time" className="input input-bordered bg-[#18433f]" />
        
        </div>
        
      </div>
      <div className="form-control px-4 py-4 ">
          <button className="btn btn-outline border-[#F7A582] text-[#F7A582] hover:bg-[#F7A582] hover:text-white">Login</button>
        </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ContactForm;