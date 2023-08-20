import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const MyHistory = () => {
    const { user } = useContext(AuthContext)
    const [payments, setPayments] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/payment/${user.email}`)
            .then(res => res.json())
            .then(data => setPayments(data))
    }, [user])


    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold py-6">My History</h2>

            <div>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-center divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead className="ltr:text-left rtl:text-right bg-slate-200">
                            <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Name
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Email
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Fee
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Date
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {
                                payments.map((data, i) => <tr key={i} className="odd:bg-gray-50">
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {data?.name}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{data?.email}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{data?.fee}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{data?.date}</td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyHistory;