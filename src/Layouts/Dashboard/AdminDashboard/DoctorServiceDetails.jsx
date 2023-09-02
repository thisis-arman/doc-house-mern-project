import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { MdCancel } from 'react-icons/md'
import { FaRegCheckCircle } from 'react-icons/fa'
import { Toaster, toast } from "react-hot-toast";


const DoctorServiceDetails = ({ email }) => {
    // const { user } = useContext(AuthContext)
    const serviceDetails = useLoaderData()
    console.log({ serviceDetails })
    const [pendingServices, setPendingServices] = useState([])
    const [activeServices, setActiveServices] = useState([])
    console.log('setPendingServices', pendingServices)
    useEffect(() => {
        fetch(`https://doc-house-server-thisis-arman.vercel.app/api/services/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const pendingService = data.filter(d => d.status == 'pending')
                const activeService = data.filter(data => data.status === 'active')
                setPendingServices(pendingService)
                setActiveServices(activeService)

            })
    }, [])


    const handleAcceptService = (id) => {
        fetch(`https://doc-house-server-thisis-arman.vercel.app/api/services-by/${id}`, {
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
        fetch(`https://doc-house-server-thisis-arman.vercel.app/api/services-by/${id}`, {
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
        <div className="p-10">
            {/* <h2>Active Status {service.length}</h2> */}

            <Toaster />
            {
                (activeServices > 0 || pendingServices > 0) ? <div>
                    {/* {activeServices.length} */}
                    <div className="overflow-x-auto mb-10">
                        <h1 className="font-bold text-2xl py-4">Pending Services  </h1>
                        <table className="table  w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    {/* <th>Price</th> */}
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    activeServices.map((req, i) => <tr key={i}>
                                        <td>
                                            {i + 1}
                                        </td>

                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={req?.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>

                                        <td>
                                            {req?.serviceName}

                                        </td>
                                        <td>{req?.doctorEmail}</td>
                                        <td>
                                            <button className="">{req?.status}</button>
                                        </td>
                                        <td>
                                            <button className="">${req.consultFee}</button>
                                        </td>
                                        <th>
                                            <button className=" mx-auto gap-2">
                                                <MdCancel onClick={() => handleDelete(req._id)} className="text-2xl text-red-600" title="Cancel" />

                                                {/* <FaRegCheckCircle className="text-2xl text-green-600" title="Accept" /> */}
                                            </button>
                                        </th>
                                    </tr>)
                                }



                            </tbody>



                        </table>
                    </div>
                    {/* {pendingServices.length} */}
                    <div className="overflow-x-auto">
                        <h1 className="font-bold text-2xl py-4">Pending Services  </h1>
                        <table className="table  w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    {/* <th>Price</th> */}
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    pendingServices.map((req, i) => <tr key={i}>
                                        <td>
                                            {i + 1}
                                        </td>

                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={req?.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>

                                        <td>
                                            {req?.serviceName}

                                        </td>
                                        <td>{req?.doctorEmail}</td>
                                        <td>
                                            <button className="">{req?.status}</button>
                                        </td>
                                        <td>
                                            <button className="">${req.consultFee}</button>
                                        </td>
                                        <th>
                                            <button className="flex items-center gap-2">
                                                <MdCancel onClick={() => handleDelete(req._id)} className="text-2xl text-red-600" title="Cancel" />

                                                <FaRegCheckCircle onClick={() => handleAcceptService(req._id)} className="text-2xl text-green-600" title="Accept" />
                                            </button>
                                        </th>
                                    </tr>)
                                }



                            </tbody>



                        </table>
                    </div>
                </div>
                    : <h2 className="text-3xl font bold text-center py-10">No Service Added Yet</h2>
            }




        </div>
    );
};

export default DoctorServiceDetails;