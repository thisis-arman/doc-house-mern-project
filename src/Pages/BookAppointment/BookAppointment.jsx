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

        console.log(doctorID)

        const appointmentInfo = { name, email, number, time, date, userEmail: user.email, doctorEmail, image, doctorID, details, }
        fetch('http://localhost:5000/appointments', {
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
                <form onSubmit={handleSubmit} className="shadow border  max-w-3xl  w-full  p-8 mx-auto rounded ">

                    <div className="flex items-center w-full gap-4">

                        <div className="form-control w-full ">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                className="input input-bordered w-full "
                            />
                        </div>
                        <div className="form-control w-full ">
                            <input
                                type="text"
                                name="serviceName"
                                placeholder="service name"
                                defaultValue={serviceName}
                                className="input my-4 input-bordered w-full "
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4 w-full ">
                        <div className="form-control w-full ">
                            <input
                                type="time"
                                name="time"
                                placeholder="Select time"
                                className="input my-4 input-bordered w-full "
                            />
                        </div>
                        <div className="form-control w-full ">
                            <input
                                type="date"
                                name="date"
                                placeholder="Select Date"
                                className="input my-4 input-bordered w-full "
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4 w-full">
                        <div className="form-control w-full  my-4 ">

                            <input
                                type="email"

                                name="email"
                                placeholder={`${user.email}`}
                                className="input input-bordered w-full "
                            />
                        </div>
                        <div className="form-control w-full mb-4 ">
                            {/* <select placeholder="Doctor ID" className="input input-bordered w-full " id="doctor_name" name='doctorID'>
{users.map((user, i) => <option key={i} value={user?.doctorID} >{user?.name}</option>)}
</select> */}
                        </div>
                    </div>
                    <div className="md:flex items-center gap-4 w-full">
                        <div className="form-control w-full mb-4 ">

                            <input
                                type="number"
                                name="consultFee"
                                placeholder="Consult Fee"
                                defaultValue={`$${consultFee}`}
                                className="input input-bordered w-full "
                            />
                        </div>
                        <div className="form-control w-full mb-4 ">

                            <input
                                type="number"
                                name="number"
                                placeholder="Phone Number"
                                className="input input-bordered w-full "
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn w-full  btn-secondary my-4">
                        Submit
                    </button>
                </form>
            </div>
            <form action="">


            </form>

        </section>
    );
};

export default BookAppointment;