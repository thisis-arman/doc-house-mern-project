import { useContext, useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { MdCancel } from 'react-icons/md'
import { FaRegCheckCircle } from 'react-icons/fa'


const DoctorServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const [pendingServices, setPendingServices] = useState([])
    const [activeServices, setActiveServices] = useState([])
    console.log('setPendingServices', pendingServices)
    useEffect(() => {
        fetch(`http://localhost:5000/api/services`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const pendingService = data.filter(d => d.status == 'pending')
                const activeService = data.filter(data => data.status === 'active')
                setPendingServices(pendingService)
                setActiveServices(activeService)

            })
    }, [])


    const handleDelete = (id) => {
        fetch(``)
    }
    return (
        <div className="p-10">
            {/* <h2>Active Status {service.length}</h2> */}


            {/* {activeServices.length} */}
            <div className="overflow-x-auto">
                <h1 className="font-bold text-2xl py-4">Active Doctor  </h1>
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
                                    <button className="flex items-center gap-2"><MdCancel className="text-2xl text-red-600" title="Cancel" /> <FaRegCheckCircle className="text-2xl text-green-600" title="Accept" /></button>
                                </th>
                            </tr>)
                        }



                    </tbody>



                </table>
            </div>
            {/* {pendingServices.length} */}



        </div>
    );
};

export default DoctorServiceDetails;