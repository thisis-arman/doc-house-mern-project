import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const SubServices = ({ category }) => {
  const [services, setServices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const handleSubmit =(event)=>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const time = form.time.value;
    const number = form.number.value;
    const email = form.email.value;

    const appointmentInfo = {name,email,number,time,date}
    fetch('http://localhost:5000/appointment',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(appointmentInfo)
    })
    .then((data)=>{
      if(data.insertedId){
        toast.success(" Appointment Booked Successfully")
      }
    })
    .catch((err)=>{
      console.log(err)
      toast.error("Please try Again")
    })
  }

  useEffect(() => {
    fetch(`http://localhost:5000/get-service-data/${category}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [category]);
  return (
    <section>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full justify-between">
        {services.map((data, i) => (
          <div
            className="border bg-base-100 flex items-center justify-center p-4 shadow rounded"
            key={i}
          >
            <div className="">
              <img className="w-2/4 mx-auto" src={data?.image} alt="" />
              <h2 className="text-2xl py-2 font-bold">{data?.services}</h2>
              <p className="text-center">{data?.time}</p>
              {data.isAvailable ? (
                <button className="btn btn-secondary mt-6-" onClick={openModal}>
                  Book Appointment
                </button>
              ) : (
                <div onClick={() => window.my_modal_3.showModal()}>
                  <button className="btn cursor-not-allowed btn-secondary mt-6-">
                    Book Appointment
                  </button>
                  <p className="text-red-500">Sorry!No slots Available</p>
                </div>
              )}
            </div>
            {/* Modal */}
            <div className="flex justify-center items-center ">
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center  z-10">
            <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
            <div className="bg-white rounded-lg md:w-1/3 w-full z-20">
              <div className=" md:flex items-center justify-center   ">
                <form onSubmit={handleSubmit} className="shadow border flex flex-col justify-center items-center w-full  p-8 mx-auto rounded ">
                  <button
                    onClick={closeModal}
                    className="bg-red-500 hover:bg-red-700 relative left-44 -top-6  text-white font-bold py-2 px-4 rounded"
                  >
                    Close
                  </button>

                  <div className="form-control w-full max-w-sm">
                    <input
                      type="text"
                      name="time"
                      defaultValue={data?.time}
                      placeholder="Enter your name"
                      className="input my-4 input-bordered w-full max-w-sm"
                    />
                  </div>
                  <div className="form-control w-full max-w-sm">
                    <input
                      type="date"
                      name="date"
                      placeholder="Select Date"
                      className="input my-4 input-bordered w-full max-w-sm"
                    />
                  </div>
                  <div className="form-control w-full max-w-sm">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="input input-bordered w-full max-w-sm"
                    />
                  </div>
                  <div className="form-control w-full  my-4 max-w-sm">
                
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input input-bordered w-full "
                    />
                  </div>
                  <div className="form-control w-full mb-4 max-w-sm">
                  
                    <input
                      type="number"
                      name="number"
                      placeholder="Phone Number"
                      className="input input-bordered w-full max-w-sm"
                    />
                  </div>
                  <button type="submit" className="btn w-full max-w-sm btn-secondary my-4">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>


          </div>
        ))}
      </div>
      {/* You can open the modal using ID.showModal() method */}

     
    </section>
  );
};

export default SubServices;
