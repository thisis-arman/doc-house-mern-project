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
        <div className="p-10">
            <h1>Doctor request  {doctorReq.length}</h1>


            <div>
                <div className="overflow-x-auto">
                    <table className="table text-center w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                doctorReq.map((req, i) => <tr key={i}>

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
                                        <button className="btn btn-ghost btn-xs">details</button>
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