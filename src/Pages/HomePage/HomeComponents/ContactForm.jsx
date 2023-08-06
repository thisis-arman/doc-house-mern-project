import react, { useState } from "react";

const ContactForm = () => {
  const [Name, setName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Doctor, setDoctor] = useState("");
  const [Email, setEmail] = useState("");
  const [Time, setTime] = useState("");
  const [Date, setDate] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      Name,
      Mobile,
      Doctor,
      Email,
      Time,
      Date,
    };

    const url =
      "https://script.google.com/macros/s/AKfycbziRFLsIcPXBArqMsMXcsjfbiRzZLxxKEo1qPhwkv_CY89e_zjNmuMuFnwhdG6cqd1L/exec";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data added to Google Sheets successfully!");
        // Do something after successful submission, e.g., clear the form fields
      } else {
        console.error("Error adding data to Google Sheets:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding data to Google Sheets:", error);
    }
  };


  return (
    <div className="container mx-auto relative top-20 md:mb-28 px-4">
      <div className="hero min-h-screen text-white bg-[#07332F] rounded-md py-8 ">
        <div className="md:px-20 px-4 md:flex items-center gap-12 ">
          <div className="text-center md:w-2/5  lg:text-left">
            <h1 className="text-5xl font-bold">Contact With Us!</h1>
            <p className="py-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inve ntore veritatis et quasi.
            </p>
            <div className="flex gap-4 py-2">
              <img
                className="w-6 h-6"
                src="../../../../doc-house Assets/phone-alt.png"
                alt=""
              />
              <p>+880182745982</p>
            </div>
            <div className="flex gap-4 py-2">
              <img src="../../../../doc-house Assets/location.png" alt="" />
              <p>Dhanmondi, Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="card flex-shrink-0 md:w-3/5 w-full  shadow-2xl ">

            <form onSubmit={handleSubmit}>
              <div className="card-body grid grid-cols-1 md:grid-cols-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="Name"
                    value={Name}
                    onChange={(e)=>setName(e.target.value)}
                    className="input input-bordered text-black bg-[#18433f]"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="Email"
                    value={Email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="input input-bordered text-black bg-[#18433f]"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Mobile Number</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Number"
                    name="Mobile"
                    value={Mobile}
                    onChange={(e)=>setMobile(e.target.value)}
                    className="input input-bordered bg-[#18433f] text-black"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Doctor Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Doctor name"
                    name="Doctor"
                    value={Doctor}
                    onChange={(e)=>setDoctor(e.target.value)}
                    className="input input-bordered text-white bg-[#18433f]"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="date"
                    placeholder="date"
                    name="Date"
                    value={Date}
                    onChange={(e)=>setDate(e.target.value)}
                    className="input input-bordered text-white bg-[#18433f]"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Time</span>
                  </label>
                  <input
                    type="time"
                    placeholder="time"
                    name="Time"
                    value={Time}
                    onChange={(e)=>setTime(e.target.value)}
                    className="input input-bordered text-white bg-[#18433f]"
                  />
                </div>
              </div>
              <div className="form-control px-4 py-4 ">
                <button
                  type="submit"
                  className="btn btn-outline border-[#F7A582] text-[#F7A582] hover:bg-[#F7A582] hover:text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
