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
      <section className="bg-slate-200">
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
          <div className=" grid md:grid-cols-2 grid-cols-1 gap-4 py-12 ">
            <div>
              {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

              <div className="overflow-x-auto">
                <h2 className="text-xl font-bold  p-2 my-2 bg-slate-200">Recent Appointments</h2>
                <table className=" divide-y-2 min-w-full  border shadow-lg divide-gray-200 bg-white text-sm">
                  <thead className="ltr:text-left rtl:text-right">
                    <tr>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Name
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Date
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Number
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
                <h2 className="text-xl font-bold  p-2 my-2 bg-slate-200">Recent Transactions</h2>
                <table className="min-w-full  divide-y-2 border shadow-lg divide-gray-200 bg-white text-sm">
                  <thead className="ltr:text-left rtl:text-right">
                    <tr>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Name
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Fee
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Trx. ID
                      </th>

                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {
                      payments.map((payment, i) => <tr key={i} className="odd:bg-gray-50">
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          {payment?.name}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{payment?.fee}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{payment?.transactionId}</td>

                      </tr>)
                    }


                  </tbody>
                </table>
              </div>


            </div>
            <div>

              <div className="overflow-x-auto">
                <h2 className="text-xl font-bold  p-2 my-2 bg-slate-200">Patients</h2>
                <table className="min-w-full  text-center divide-y-2 border shadow-lg divide-gray-200 bg-white text-sm">
                  <thead className="ltr:text-left rtl:text-right">
                    <tr>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">

                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Name
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Email
                      </th>

                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {
                      users.map((user, i) => <tr key={i} className="odd:bg-gray-50">
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src={user?.image || 'https://img.freepik.com/free-icon/user_318-159711.jpg?t=st=1692541894~exp=1692542494~hmac=a9c577088b09d43e068f2de89460096e075027517e682b2bb48400d1aba1b15d'} alt="Avatar Tailwind CSS Component" />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          {user?.name}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user?.email}</td>


                      </tr>
                      )
                    }

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