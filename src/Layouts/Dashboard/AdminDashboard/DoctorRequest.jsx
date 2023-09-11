import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const DoctorRequest = () => {

    const [doctorReq, setDoctorReq] = useState([])
    const [doctors, setDoctor] = useState([])





    const handleStatus = (user) => {
        fetch(`http://localhost:5000/api/doctor/${user._id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Approved successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })


    }

    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => {

                const pendingDoctor = data.filter(data => data.role === "doctor" && data.status === "pending")
                const activeDoctors = data.filter(data => data.role === "doctor" && data.status === "active")
                setDoctorReq(pendingDoctor)
                setDoctor(activeDoctors)
                console.log(pendingDoctor)


            })
    }, [])


    return (
        <div className="p-10 bg-slate-200">





            {/* Active Doctor */}

            <div className="overflow-x-auto">
                <h1 className="font-bold text-2xl py-4">Active Doctor  </h1>
                <table className="table text-center w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Active Service</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            doctors.map((req, i) => <tr key={i}>
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
                                    {req?.name}

                                </td>
                                <td>{req?.email}</td>
                                <td>
                                    <button className="">{req?.status}</button>
                                </td>
                                <td>
                                    <button className="">{0}</button>
                                </td>
                                <th>
                                    <Link email={req.email} to={`/dashboard/doctor-request/services-request/${req.email}`} className="px-4 bg-green-600 hover:bg-lime-600 rounded text-white">View</Link>
                                </th>
                            </tr>)
                        }



                    </tbody>



                </table>
            </div>

            {/* Pending Doctor */}
            <h1 className="font-bold text-2xl py-4">Doctor request  </h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table text-center w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                doctorReq.map((req, i) => <tr key={i}>
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
                                        {req?.name}

                                    </td>
                                    <td>{req?.email}</td>
                                    <th>
                                        <button className="">{req?.status}</button>
                                    </th>
                                    <th>
                                        <button onClick={() => handleStatus(req)} className="px-4 bg-green-600 hover:bg-lime-600 rounded text-white">Accept</button>
                                    </th>
                                </tr>)
                            }



                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default DoctorRequest;