import { useEffect } from "react";
import { useState } from "react";
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck2Square, BsTrash } from 'react-icons/bs'
import toast, { Toaster } from "react-hot-toast";


const AllServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log({ services })


    const handleAcceptService = (id) => {
        fetch(`http://localhost:5000/api/services-by/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Service Accepted Successfully")
                }
            })
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/api/services-by/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Service Deleted Successfully")
                }
            })
    }


    return (
        <div className="p-6">
            <Toaster />
            <h1 className="text-3xl font-bold">All Services</h1>
            <section>

                <div className="overflow-x-auto py-6">
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm p-6">
                        <thead className="text-left bg-neutral-300">
                            <tr >
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Service Name
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Doctor Name
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Consultation Fee
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Status
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Salary
                                </th>
                                <th className="px-4 py-2"></th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {
                                services.map((service, i) =>
                                    <tr key={i} className="text-left">
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                            {service.serviceName}
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{service?.doctorName || 'doctor'}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">${service?.consultFee}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{service.status}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
                                        <td className="whitespace-nowrap px-4  py-2">
                                            {service.status == 'active' ?
                                                <>

                                                    <a onClick={() => handleDelete(service._id)}
                                                        href="#"
                                                        className="inline-block rounded bg-base-200 p-2 py-2  font-medium text-black text-xl mx-2"
                                                    >
                                                        <BsTrash />
                                                    </a>

                                                </>
                                                : <>
                                                    <a onClick={() => handleAcceptService(service._id)}
                                                        href="#"
                                                        className="inline-block rounded bg-base-200 p-2 py-2  font-medium text-black text-xl mx-2"
                                                    >
                                                        <BsCheck2Square />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="inline-block rounded bg-base-200 p-2 py-2  font-medium text-black text-xl mx-2"
                                                    >
                                                        <MdOutlineCancel />
                                                    </a>
                                                </>
                                            }
                                        </td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>

            </section>

        </div>
    );
};

export default AllServices;