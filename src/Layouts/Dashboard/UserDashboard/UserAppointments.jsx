import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const UserAppointments = () => {
    const { user } = useContext(AuthContext)
    const [appointments, setAppointments] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${user.email}`)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [user])



    return (
        <div className="p-8">
            <h2 className="text-4xl font-bold py-6">MY Appointments</h2>



            <div className="overflow-x-auto ">
                <table className="min-w-full border divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Name
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Email
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Number
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Date
                            </th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {
                            appointments.map((app, i) => <tr key={i}>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    {app.name}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{app.userEmail}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{app.number}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{app?.date}</td>
                                <td className="whitespace-nowrap px-4 py-2">
                                    <a
                                        href="#"
                                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                    >
                                        View
                                    </a>
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