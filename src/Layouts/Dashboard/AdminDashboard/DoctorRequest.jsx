import { useEffect } from "react";
import { useState } from "react";


const DoctorRequest = () => {

    const [doctorReq, setDoctorReq] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => {

                const pendingDoctor = data.filter(data => data.role === "doctor" && data.status === "pending")
                setDoctorReq(pendingDoctor)
                console.log(pendingDoctor)


            })
    }, [])



    return (
        <div className="p-10 bg-slate-200">
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
                                <th>Name</th>
                                <th>Job</th>
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
                                        <button className="px-4 bg-green-600 hover:bg-lime-600 rounded text-white">Accept</button>
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