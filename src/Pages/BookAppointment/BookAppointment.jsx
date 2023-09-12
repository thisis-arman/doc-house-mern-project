import { useLoaderData, useNavigate } from "react-router-dom";
import PageCover from "../../Components/PageCover";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";


const BookAppointment = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const service = useLoaderData()
    console.log({ service })
    const { consultFee, serviceName, image, doctorEmail, doctorID, details, number } = service;

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const time = form.time.value;
        const age = form.age.value;
        // const number = form.number.value;
        const email = form.email.value;

        console.log(doctorID)

        const appointmentInfo = { name, email, number, time, date, userEmail: user.email, doctorEmail, image, doctorID, details, consultFee, age }
        console.log({ appointmentInfo })
        fetch('http://localhost:5000/appointments', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointmentInfo)
        })
            .then((data) => {
                if (data.insertedId > 0) {
                    console.log({ data })
                    alert('Successfully')
                    toast.success(" Appointment Booked Successfully")
                    navigate('/dashboard/user-home')
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

                        <div className="form-control py-2 w-full ">
                            <label htmlFor="">Patient Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Patient Name"
                                className="input input-bordered w-full "
                            />
                        </div>
                        <div className="form-control py-2 w-full ">
                            <label htmlFor="">Service Name</label>
                            <input
                                type="text"
                                name="serviceName"
                                placeholder="service name"
                                defaultValue={serviceName}
                                className="input input-bordered w-full "
                            />
                        </div>
                    </div>
                    <div className="flex items-center py-2 gap-4 w-full ">
                        <div className="form-control w-full ">
                            <label htmlFor="">Appointment Time</label>
                            <input
                                type="time"
                                name="time"
                                placeholder="Select time"
                                className="input  input-bordered w-full "
                            />
                        </div>
                        <div className="form-control py-2 w-full ">
                            <label htmlFor=""> Date</label>
                            <input
                                type="date"
                                name="date"
                                placeholder="Select Date"
                                className="input  input-bordered w-full "
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4 py-2 w-full">
                        <div className="form-control w-full   ">
                            <label htmlFor=""> Email</label>

                            <input
                                type="email"

                                name="email"
                                placeholder={`${user.email}`}
                                className="input input-bordered w-full "
                            />
                        </div>

                        <div className="form-control w-full py-2  ">
                            <label htmlFor=""> Gender</label>
                            <select placeholder="Gender" className="input input-bordered w-full " id="gender" name='gender'>
                                <option value="" name>Male </option>
                                <option value="" name>Female </option>

                            </select>
                        </div>
                    </div>
                    <div className="md:flex items-center gap-4 py-2 w-full">
                        <div className="form-control w-full  ">
                            <label htmlFor="">Age</label>

                            <input
                                type="number"
                                name="age"
                                placeholder="Patient Age"

                                className="input input-bordered w-full "
                            />
                        </div>
                        <div className="form-control w-full py-2  ">
                            <label htmlFor="">Phone Number</label>

                            <input
                                type="tel"
                                name="number"
                                placeholder="Phone Number"

                                className="input input-bordered w-full "
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn w-full bg-green-600 hover:border-2 hover:border-green-600 hover:bg-white hover:text-black  my-4">
                        Submit
                    </button>
                </form>
            </div>
            <Toaster />

        </section>
    );
};

export default BookAppointment;