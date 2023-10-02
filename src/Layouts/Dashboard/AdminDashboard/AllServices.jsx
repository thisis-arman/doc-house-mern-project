import { useEffect } from "react";
import { useState } from "react";


const AllServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log({ services })


    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">All Services</h1>
            <section>
                {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

                <div className="overflow-x-auto py-6">
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm p-6">
                        <thead className="text-left ">
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
                                        <td className="whitespace-nowrap px-4 py-2">
                                            <a
                                                href="#"
                                                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                            >
                                                View
                                            </a>
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