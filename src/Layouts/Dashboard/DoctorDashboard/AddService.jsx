import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";


const AddService = () => {
    const { user } = useContext(AuthContext)
    const [currentDoctor, setCurrentDoctor] = useState([])
    const [selectedImage, setSelectedImage] = useState("");



    useEffect(() => {
        fetch(`http://localhost:5000/api/doctors/${user.email}`)
            .then(res => res.json())
            .then(data => setCurrentDoctor(data))
    }, [user])

    console.log(currentDoctor)



    const handleImage = (event) => {
        event.preventDefault();
        const selectedImage = event.target.files[0]
        console.log(selectedImage)
        const formData = new FormData()
        formData.append("file", selectedImage)
        formData.append("upload_preset", 'vcvltcqx')
        fetch(`https://api.cloudinary.com/v1_1/dshjcmrd0/image/upload`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                setSelectedImage(data.secure_url)

            })

    };





    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const serviceName = form.serviceName.value;
        const consultFee = form.consultFee.value;
        const details = form.details.value;
        const number = form.phone.value;

        const newService = { serviceName, consultFee: parseInt(consultFee), details, number, doctorID: currentDoctor?.profile?.doctorID, doctorEmail: currentDoctor?.profile?.email, status: "pending", image: selectedImage };

        console.log({ newService })

        fetch(`http://localhost:5000/api/services`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    toast.success(" Service Request sent successfully")
                }
            })





    }
    return (
        <div className="p-10">
            <h2 className="text-3xl font-bold">Add a Service</h2>
            <div>
                <section className="">
                    <div className=" w-3/5 mx-auto max-w-screen px-4 py-6 sm:px-6 lg:px-8">
                        {/* <h2 className="text-3xl font-bold py-4">Add a Doctor</h2> */}


                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form onSubmit={handleSubmit} action="" className="space-y-4">
                                <div>
                                    <label className="" htmlFor="name"> Service Name</label>
                                    <input
                                        className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                                        placeholder="ex:Kidney Disease Evaluation and Management"
                                        type="text"
                                        id="name"
                                        name='serviceName'
                                    />
                                </div>
                                <div>
                                    <label className="" htmlFor="phone">Fee</label>
                                    <input
                                        className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                                        placeholder="Consultation Fee"
                                        type="number"
                                        id="phone"
                                        name='consultFee'
                                    />
                                </div>
                                <div>
                                    <label className="" htmlFor="Chamber">Chamber</label>
                                    <input
                                        className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                                        placeholder="e.g: 406 no room , Popular , DhaKa"
                                        type="text"
                                        name="chamber"
                                    />
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="" htmlFor="email">Email</label>
                                        <input
                                            className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                                            placeholder="Email address"
                                            type="email"
                                            name="email"
                                            defaultValue={user?.email}
                                            id="email"
                                        />
                                    </div>

                                    <div>
                                        <label className="" htmlFor="phone">Doctor ID</label>
                                        <input
                                            className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                                            placeholder="doctor ID"
                                            type="number"
                                            name="number"
                                            id="id"
                                            defaultValue={currentDoctor?.profile?.doctorID}
                                        />
                                    </div>

                                </div>


                                <div>
                                    <label className="" htmlFor="phone">Phone</label>
                                    <input
                                        className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                                        placeholder="phone number"
                                        type="tel"
                                        defaultValue={currentDoctor?.profile?.phone}

                                        name="phone"
                                    />
                                </div>



                                <div>
                                    <label className="" htmlFor="message">Service Details</label>

                                    <textarea
                                        className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                                        placeholder="Write details about Service"
                                        rows="8"
                                        id="message"
                                        name="details"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="" htmlFor="image">Image</label>
                                    <input onChange={handleImage} type="file" name="image" className="w-full  rounded-lg border-2 border-gray-200 p-3 text-sm" id="" />
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-green-800 hover:bg-green-700 px-5 py-3 font-medium text-white max-w-full"
                                    >
                                        ADD
                                    </button>
                                </div>
                            </form>
                        </div>\<Toaster />
                        {/* </div> */}
                    </div>
                </section>


            </div>

        </div>
    );
};

export default AddService;