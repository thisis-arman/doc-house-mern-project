import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const MyServices = () => {
    const { user } = useContext(AuthContext)
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/api/services/${user.email}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [user])

    console.log({ services })
    return (
        <section className="container mx-auto p-10">
            <h2 className="text-3xl font-bold py-4">My Services</h2>

            <div className="grid md:grid-cols-2 gap-6 grid-cols-1 ">
                {
                    services.map((service, i) => <div key={i} href="#" className="shadow-md relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
                        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r to-green-400 via-blue-300 from-purple-400" />
                        <div className="sm:flex sm:justify-between sm:gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                    {service?.serviceName}
                                </h3>
                                <p className="mt-1 text-xs font-medium text-gray-600">By {user?.displayName}</p>
                            </div>
                            <div className="hidden sm:block sm:shrink-0">
                                <img alt="Paul Clapton" src={service?.image} className="h-16 w-16 rounded-lg object-cover shadow-sm" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="max-w-[40ch] text-sm text-gray-500">
                                {service?.details}
                            </p>
                        </div>
                        <dl className="mt-6 flex gap-4 sm:gap-6">
                            <div className="flex flex-col-reverse">
                                <dt className="text-sm font-medium text-gray-600">${service?.consultFee}</dt>
                                <dd className="text-xs text-gray-500">Fee</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                                <dd className="text-xs text-gray-500">3 minute</dd>
                            </div>
                        </dl>
                    </div>
                    )
                }
            </div>

        </section>
    );
};

export default MyServices;