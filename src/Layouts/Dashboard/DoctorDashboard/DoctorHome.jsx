import { useContext, useEffect, useState } from 'react';
import { SlCalender } from 'react-icons/sl'
import { AuthContext } from '../../../Provider/AuthProvider';

const DoctorHome = () => {

    const { user } = useContext(AuthContext)
    const [appointments, setAppointment] = useState([])
    const [users, setUsers] = useState([])
    const currentUser = users.find(d => d.name == user.displayName)
    // console.log(data.doctorID, 'checking user--')
    console.log(appointments, 'appointments')
    // console.log(user.doctorID)
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                const doctor = data.filter(d => d.role == "doctor")
                setUsers(doctor)
            })
    }, [])
    useEffect(() => {

        fetch(`http://localhost:5000/api/appointments/${currentUser?.doctorID}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [currentUser])
    return (
        <section className='p-4'>
            <h2 className='text-2xl font-bold py-4'>Doctor Home</h2>
            <div className='flex  justify-evenly gap-4 rounded-md py-8'>
                <div className='flex p-4 rounded-md px-8 items-center border bg-pink-200 gap-4'>
                    <SlCalender />
                    <div className=''>
                        <h2 className="text-2xl font-bold">342</h2>
                        <p>Appointments</p>
                    </div>
                </div>
                <div className='flex items-center p-4 px-8 rounded-md border bg-green-200 gap-4'>
                    <SlCalender />
                    <div>
                        <h2 className="text-2xl font-bold">342</h2>
                        <p>Appointments</p>
                    </div>
                </div>
                <div className='flex items-center p-4 px-8 rounded-md border bg-blue-200 gap-4'>
                    <SlCalender />
                    <div>
                        <h2 className="text-2xl font-bold">342</h2>
                        <p>Appointments</p>
                    </div>
                </div>
                <div className='flex items-center border p-4 px-8 rounded-md bg-orange-200 gap-4'>
                    <SlCalender />
                    <div>
                        <h2 className="text-2xl font-bold">342</h2>
                        <p>Appointments</p>
                    </div>
                </div>
            </div>
            <div>
                {/* Table */}

                <div className="overflow-x-auto  border-gray-200">
                    <table className=" divide-y-2 border rounded-lg  divide-gray-200 bg-white text-sm">
                        <thead className="ltr:text-left rtl:text-right">
                            <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Name
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Date of Birth
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Role
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Salary
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    John Doe
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
                            </tr>

                            <tr>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Jane Doe
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
                            </tr>

                            <tr>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Gary Barlow
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    );
};

export default DoctorHome;