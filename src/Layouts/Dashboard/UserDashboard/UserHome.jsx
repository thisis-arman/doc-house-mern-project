import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const UserHome = () => {
  const { user } = useContext(AuthContext)

  const [appointments, setAppointments] = useState([])


  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${user.email}`)
      .then(res => res.json())
      .then(data => setAppointments(data))
  }, [user])

  return (
    <div>
      <section className="bg-white p-8">

        <h2 className="text-4xl font-bold">Welcome ,{user.displayName}</h2>
        <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 md:py-8 lg:px-8">


          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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

                <dd className="text-4xl font-extrabold  md:text-5xl">$24</dd>
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
        </div>
      </section>

    </div>
  );
};

export default UserHome;