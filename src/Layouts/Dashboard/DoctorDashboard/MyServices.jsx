import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FiEdit } from 'react-icons/fi'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Toaster, toast } from "react-hot-toast";



const MyServices = () => {
    const { user } = useContext(AuthContext)
    const [currentDoctor, setCurrentDoctor] = useState([])
    const [services, setServices] = useState([])
    const [service, setService] = useState({})
    const [selectedImage, setSelectedImage] = useState("");
    const { serviceName, consultFee, doctorID, doctorEmail, details } = service;
    console.log({ serviceName, consultFee, doctorID, doctorEmail, details })

    console.log({ currentDoctor })

    useEffect(() => {
        fetch(`http://localhost:5000/api/doctors/${user.email}`)
            .then(res => res.json())
            .then(data => setCurrentDoctor(data))
    }, [user])

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    useEffect(() => {
        fetch(`http://localhost:5000/api/services/${user.email}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [user])

    const showDefaultValue = (id) => {
        fetch(`http://localhost:5000/api/services-by/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }



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


    const handleEditService = (event) => {

        console.log("worked")
        event.preventDefault()
        const form = event.target;
        const serviceName = form.serviceName.value;
        const consultFee = form.consultFee.value;
        const details = form.details.value;

        const updatedService = { serviceName, consultFee: parseInt(consultFee), details, doctorID: service?.doctorID, doctorEmail: service?.email, status: "pending", image: selectedImage };

        console.log({ updatedService })

        fetch(`http://localhost:5000/api/services/${service._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success(" Service updated successfully")
                }
            })


        /*  
  */
    }


    console.log({ services })
    return (
        <section className="container mx-auto p-10">
            <h2 className="text-3xl font-bold py-4">My Services</h2>

            <div className="grid md:grid-cols-2 gap-6 grid-cols-1 ">
                {
                    services.map((service, i) => <div key={i} href="#" className="shadow-md relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
                        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r to-green-400 via-blue-300 from-purple-400" />
                        <div className="sm:flex sm:justify-between sm:gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                    {service?.serviceName}
                                </h3>
                                <p className="mt-1 text-xs font-medium text-gray-600">By {user?.displayName}</p>
                            </div>
                            <div className="hidden sm:block sm:shrink-0">
                                <img alt="Paul Clapton" src={service?.image} className="h-16 w-16 rounded-lg object-cover shadow-sm" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="max-w-[40ch] text-sm text-gray-500">
                                {service?.details}
                            </p>
                        </div>
                        <dl className="mt-6 flex gap-4 sm:gap-6">
                            <div className="flex flex-col-reverse">
                                <dt className="text-sm font-medium text-gray-600">${service?.consultFee}</dt>
                                <dd className="text-xs text-gray-500">Fee</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                                <dd className="text-xs text-gray-500">3 minute</dd>
                            </div>
                            <div onClick={() => showDefaultValue(service?._id)} className="relative left-72 top-4">
                                <FiEdit onClick={openModal} className="text-2xl shadow hover:bg-slate-100  " />
                            </div>
                        </dl>

                    </div>
                    )
                }
            </div>

            {/* Modals */}
            <Toaster />


            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                                        <form onSubmit={handleEditService} action="" className="space-y-4">
                                            <div>
                                                <label className="" htmlFor="name"> Service Name</label>
                                                <input
                                                    className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                                                    placeholder={`${serviceName}`}
                                                    type="text"
                                                    id="name"
                                                    name='serviceName'

                                                    defaultChecked={serviceName}
                                                />
                                            </div>
                                            <div>
                                                <label className="" htmlFor="phone">Fee</label>
                                                <input
                                                    className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                                                    placeholder={`${consultFee}`}
                                                    type="number"
                                                    id="phone"
                                                    name='consultFee'
                                                    defaultChecked={consultFee}

                                                />
                                            </div>
                                            <div>
                                                <label className="" htmlFor="Chamber">Chamber</label>
                                                <input
                                                    className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                                                    placeholder={`${currentDoctor?.profile?.Chamber}`}
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
                                                        defaultValue={doctorID}
                                                    />
                                                </div>

                                            </div>


                                            {/* <div>
                                                <label className="" htmlFor="phone">Phone</label>
                                                <input
                                                    className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                                                    placeholder="phone number"
                                                    type="tel"
                                                    defaultValue={service?.phone}

                                                    name="phone"
                                                />
                                            </div> */}



                                            <div>
                                                <label className="" htmlFor="message">Service Details</label>

                                                <textarea
                                                    className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                                                    placeholder={`${details}`}
                                                    rows="8"
                                                    id="message"
                                                    name="details"

                                                    defaultChecked={details}
                                                ></textarea>
                                            </div>
                                            <div>
                                                <label className="" htmlFor="image">Image</label>
                                                <input onChange={handleImage} type="file" name="image" className="w-full  rounded-lg border-2 border-gray-200 p-3 text-sm" id="" />
                                            </div>

                                            <div className="mt-4">
                                                <button onClick={closeModal}
                                                    type="submit"
                                                    className="inline-block w-full rounded-lg bg-green-800 hover:bg-green-700 px-5 py-3 font-medium text-white max-w-full"
                                                >
                                                    ADD
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                    {/* <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div> */}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>


        </section >
    );
};

export default MyServices;