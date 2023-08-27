import { useEffect } from "react";
import PageCover from "../../Components/PageCover";
import { useState } from "react";
import { Link } from "react-router-dom";

const DoctorPage = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    console.log(doctors)
    return (
        <section>
            <PageCover pageName="Doctors" />
            <section className=" container mx-auto relative md:top-[350px] px-4 top-6 min-h-screen md:mb-[450px] mb-20">
                <div className="grid md:grid-cols-3 gap-6  grid-cols-1">
                    {
                        doctors.map((doctor, i) => <Link key={i} to='#' className="shadow relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
                            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
                            <div className="flex justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                        {doctor?.profile?.name}
                                    </h3>
                                    <p className="mt-1 text-xs font-medium text-gray-600">{doctor?.profile?.expertise}</p>
                                </div>
                                <div className=" sm:block sm:shrink-0">
                                    <img alt="Paul Clapton" src={doctor?.profile?.drImage} className="h-16 w-16 rounded-lg object-cover shadow-sm" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="max-w-[40ch] text-sm text-gray-500">
                                    Dedicated medical practitioner with expertise in {doctor?.profile?.expertise}. Committed to compassionate patient care and global health impact. Medical degree from Chittagong Medical College.
                                </p>
                            </div>
                            <dl className="mt-6 flex gap-4 sm:gap-6">
                                <div className="flex flex-col-reverse">
                                    <dt className="text-sm font-medium text-gray-600">$ {doctor?.profile?.consultFee}</dt>
                                    <dd className="text-xs text-gray-500">Fee</dd>
                                </div>
                                <div className="flex flex-col-reverse">
                                    <dt className="text-sm font-medium text-gray-600">{doctor?.profile?.ratings} reviews</dt>
                                    <dd className="text-xs text-gray-500">Ratings</dd>
                                </div>
                                <div className="flex flex-col-reverse">
                                    <dt className="text-sm font-medium text-gray-600">{doctor?.profile?.numberOfReviews} reviews</dt>
                                    <dd className="text-xs text-gray-500">Number of Review</dd>
                                </div>
                            </dl>
                        </Link>
                        )
                    }
                </div>

            </section>


        </section>
    );
};

export default DoctorPage;