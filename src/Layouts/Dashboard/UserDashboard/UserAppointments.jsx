import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";


const UserAppointments = () => {
    const { user } = useContext(AuthContext)
    const [appointments, setAppointments] = useState([])


    useEffect(() => {
        fetch(`https://doc-house-server-thisis-arman.vercel.app/api/appointments-email/${user.email}`)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [user])

    console.log({ appointments })

    const totalFee = appointments.reduce((sum, item) => sum + parseFloat(item?.fee), 0);
    console.log(totalFee, 'total feeeee')

    return (
        <div className="p-8">
            <h2 className="text-4xl font-bold py-6">MY Appointments</h2>



            <div className="overflow-x-auto ">
                <table className="min-w-full border divide-y-2 text-center divide-gray-200 bg-white text-sm">
                    <thead className="text-left ">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Date
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Name
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Fee
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Doctor Email
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Age
                            </th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 text-left">
                        {
                            appointments.map((app, i) => <tr key={i}>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    {app?.date}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{app.name}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">${app.consultFee}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{app?.doctorEmail}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{app?.age}</td>
                                <td className="whitespace-nowrap px-4 py-2">
                                    <Link to={`payments/${app._id}`}
                                        href="#"
                                        className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                    >
                                        Pay
                                    </Link>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default UserAppointments;