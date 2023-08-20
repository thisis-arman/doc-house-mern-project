import { useEffect, useState } from "react";
import { FcHome } from 'react-icons/fc';

const AdminHome = () => {
  const [appointments, setAppointments] = useState([])
  const [payments, setPayment] = useState([])

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])


  console.log(payments)

  const totalPayment = payments.reduce((sum, item) => sum + parseFloat(item?.fee), 0)


  useEffect(() => {
    fetch(`http://localhost:5000/payment`)
      .then(res => res.json())
      .then(data => setPayment(data))
  }, [])


  useEffect(() => {
    fetch(`http://localhost:5000/api/appointments`)
      .then(res => res.json())
      .then(data => setAppointments(data))
  }, [])

  return (
    <div>
      <section className="bg-gradient-to-l">
        <div className="mx-auto max-w-screen-2xl px-4  ">


          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-purple-400 text-white px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium ">
                  Total Sales
                </dt>

                <dd className="text-4xl font-extrabold  md:text-5xl">
                  $ {totalPayment}
                </dd>
              </div>

              <div className="flex flex-col rounded-lg bg-pink-600 text-white px-4 py-8 text-center">
                <p className="order-last text-lg font-medium ">
                  Total Patient
                </p>

                <dd className="text-4xl font-extrabold  md:text-5xl">{users.length}</dd>
              </div>

              <div className="flex flex-col rounded-lg text-white bg-orange-500 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium ">
                  Total Appointments
                </dt>

                <dd className="text-4xl font-extrabold md:text-5xl">{appointments.length}</dd>
              </div>
            </dl>
          </div>
          {/* ************* */}
          <div className=" grid md:grid-cols-3 grid-cols-1 gap-4 py-12 ">
            <div>
              {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

              <div className="overflow-x-auto">
                <table className=" divide-y-2 border shadow divide-gray-200 bg-white text-sm">
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

                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {appointments.slice(0, 6).map((app, i) =>
                      <tr key={i} className="odd:bg-gray-50">
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          {app?.name}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{app?.date}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{app?.number}</td>

                      </tr>)}


                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <div className="overflow-x-auto">
                <table className=" divide-y-2 border shadow divide-gray-200 bg-white text-sm">
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

                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    <tr className="odd:bg-gray-50">
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        John Doe
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>

                    </tr>


                  </tbody>
                </table>
              </div>


            </div>
            <div>

              <div className="overflow-x-auto">
                <table className=" divide-y-2 border shadow divide-gray-200 bg-white text-sm">
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

                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    <tr className="odd:bg-gray-50">
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        John Doe
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>

                    </tr>


                  </tbody>
                </table>
              </div>




            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AdminHome;