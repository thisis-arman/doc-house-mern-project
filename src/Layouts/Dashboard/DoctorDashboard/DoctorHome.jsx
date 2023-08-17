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
        <section className='p-10'>
            <h2 className='text-4xl font-bold py-4'>Welcome , {user.displayName}</h2>
            <p>Have a nice day at work</p>

            <div className='flex flex-wrap justify-between gap-4 rounded-md py-8'>
                <div className='flex p-4 rounded-md px-8 items-center border bg-pink-300 gap-4'>
                    <SlCalender />
                    <div className=''>
                        <h2 className="text-2xl font-bold">342</h2>
                        <p>Appointments</p>
                    </div>
                </div>
                <div className='flex items-center p-4 px-8 rounded-md border bg-green-300 gap-4'>
                    <SlCalender />
                    <div>
                        <h2 className="text-2xl font-bold">342</h2>
                        <p>Appointments</p>
                    </div>
                </div>
                <div className='flex items-center p-4 px-8 rounded-md border bg-blue-300 gap-4'>
                    <SlCalender />
                    <div>
                        <h2 className="text-2xl font-bold">{appointments.length}</h2>
                        <p>Appointments</p>
                    </div>
                </div>
                <div className='flex items-center border p-4 px-8 rounded-md bg-orange-300 gap-4'>
                    <SlCalender />
                    <div>
                        <h2 className="text-2xl font-bold">342</h2>
                        <p>Appointments</p>
                    </div>
                </div>
            </div>
            <div>
                {/* Table */}

                <div className="overflow-x-auto  border-gray-200 ">
                    <table className=" divide-y-2 border rounded-lg  divide-gray-200 bg-white text-sm">
                        <thead className="ltr:text-left rtl:text-right bg-base-200">
                            <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Name
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Number
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Date
                                </th>

                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {
                                appointments.map((data, i) => <tr key={i}>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {data.name}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{data.number}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{data.date}</td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    );
};

export default DoctorHome;