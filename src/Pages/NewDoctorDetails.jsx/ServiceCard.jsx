import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    return (
        <div>
            <motion.div whileHover={{ scale: 1.1 }}
                href="#"
                className="relative bg-base-100 shadow-sm block overflow-hidden rounded-lg border  border-gray-100 p-4 sm:p-6 lg:p-8"
            >
                <Link to={`/book-appointment/${service?._id}`}>

                    <span
                        className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r hover:from-green-300 from-green-500 hover:via-blue-500 via-blue-300 hover:to-purple-600 to-purple-400"
                    ></span>

                    <div className="sm:flex sm:justify-between sm:gap-4">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                {service?.serviceName}
                            </h3>

                            <p className="mt-1 text-sm font-medium text-gray-600">By {service?.doctorName || ''}</p>
                        </div>

                        <div className="hidden sm:block sm:shrink-0">
                            <img
                                alt="Paul Clapton"
                                src={service?.image}
                                className="h-16 w-16 rounded-lg object-cover shadow-sm"
                            />
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
                            <dt className="text-sm font-medium text-gray-600">{service?.doctorEmail}</dt>
                            <dd className="text-xs text-gray-500">Email</dd>
                        </div>
                    </dl>
                </Link>

            </motion.div>

        </div>
    );
};

export default ServiceCard;