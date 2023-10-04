import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const UserHome = () => {
  const { user } = useContext(AuthContext)

  const [appointments, setAppointments] = useState([])
  const [payments, setPayment] = useState([])
  console.log(payments)

  const totalPayment = payments.reduce((sum, item) => sum + parseFloat(item?.fee), 0)


  useEffect(() => {
    fetch(`https://doc-house-server-thisis-arman.vercel.app/payment/${user.email}`)
      .then(res => res.json())
      .then(data => setPayment(data))
  }, [user])


  useEffect(() => {
    fetch(`https://doc-house-server-thisis-arman.vercel.app/appointments/${user.email}`)
      .then(res => res.json())
      .then(data => setAppointments(data))
  }, [user])

  return (
    <div>
      <section className="bg-slate-200 p-8">

        <h2 className="text-4xl font-bold">Welcome ,{user.displayName}</h2>
        <div className="mx-auto  px-4 py-6 sm:px-6 md:py-8 lg:px-8">


          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div
                className="flex flex-col rounded-lg border text-white bg-purple-500 border-gray-100 px-4 py-8 text-center"
              >
                <dt className="order-last text-lg font-medium ">
                  Booked Appointments
                </dt>

                <dd className="text-4xl font-extrabold  md:text-5xl">
                  {appointments.length}
                </dd>
              </div>

              <div
                className="flex flex-col rounded-lg border bg-orange-400 text-white border-gray-100 px-4 py-8 text-center"
              >
                <dt className="order-last text-lg font-medium ">
                  Paid Amount
                </dt>

                <dd className="text-4xl font-extrabold  md:text-5xl">${totalPayment}</dd>
              </div>

              <div
                className="flex flex-col rounded-lg border border-gray-100 bg-green-400 text-white px-4 py-8 text-center"
              >
                <dt className="order-last text-lg font-medium ">
                  Due Amount
                </dt>

                <dd className="text-4xl font-extrabold  md:text-5xl">$86</dd>
              </div>
            </dl>
          </div>


          <div className=" py-6 ">
            <h2 className="text-xl overflow-x-auto  overflow-y-auto bg-white p-1 font-semibold max-w-md my-2 px-4">Recent Appointments</h2>
            <table className="w-full  divide-y-2 border shadow-sm text-center divide-gray-200 bg-white text-sm">
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

                  </tr>)
                }


              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
};

export default UserHome;