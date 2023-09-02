import { useLoaderData, useNavigate } from "react-router-dom";
import PageCover from "../../Components/PageCover";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";


const BookAppointment = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const service = useLoaderData()
    const { consultFee, serviceName, image, doctorEmail, doctorID, details } = service;

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const time = form.time.value;
        const number = form.number.value;
        const email = form.email.value;
        const doctorID = form.doctorID.value;
        console.log(doctorID)

        const appointmentInfo = { name, email, number, time, date, userEmail: user.email, doctorID: parseInt(doctorID) }
        fetch('https://doc-house-server-thisis-arman.vercel.app/appointments', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointmentInfo)
        })
            .then((data) => {
                if (data.insertedId) {
                    console.log(data)
                    alert('Successfully')
                    toast.success(" Appointment Booked Successfully")
                    navigate('/dashboard')
                }
            })
            .catch((err) => {
                console.log(err)
                toast.error("Please try Again")
            })
    }

    return (
        <section className="">
            <PageCover pageName='Book Appointment' />
            <div className="relative py-24  md:top-[250px] md:mb-[300px]">
            </div>
            <form action="">

                <form onSubmit={handleSubmit} className="shadow border flex flex-col justify-center items-center w-full  p-8 mx-auto rounded ">
                    <button

                        className="bg-red-500 hover:bg-red-700 relative left-44 -top-6  text-white font-bold py-2 px-4 rounded"
                    >
                        Close
                    </button>
                    <div className="form-control w-full max-w-sm">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            className="input input-bordered w-full max-w-sm"
                        />
                    </div>
                    <div className="form-control w-full max-w-sm">
                        <input
                            type="text"
                            name="serviceName"
                            placeholder="service name"
                            defaultValue={serviceName}
                            className="input my-4 input-bordered w-full max-w-sm"
                        />
                    </div>
                    <div className="form-control w-full max-w-sm">
                        <input
                            type="time"
                            name="time"
                            placeholder="Select time"
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

                    <div className="form-control w-full  my-4 max-w-sm">

                        <input
                            type="email"

                            name="email"
                            placeholder={`${user.email}`}
                            className="input input-bordered w-full "
                        />
                    </div>
                    <div className="form-control w-full mb-4 max-w-sm">
                        {/* <select placeholder="Doctor ID" className="input input-bordered w-full max-w-sm" id="doctor_name" name='doctorID'>
                            {users.map((user, i) => <option key={i} value={user?.doctorID} >{user?.name}</option>)}
                          </select> */}
                    </div>
                    <div className="form-control w-full mb-4 max-w-sm">

                        <input
                            type="number"
                            name="consultFee"
                            placeholder="Consult Fee"
                            defaultValue={`$${consultFee}`}
                            className="input input-bordered w-full max-w-sm"
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
            </form>

        </section>
    );
};

export default BookAppointment;