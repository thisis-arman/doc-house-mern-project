import { useLoaderData } from "react-router-dom";
import PageCover from "../../Components/PageCover";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";

const DoctorDetails = () => {
  const { user } = useContext(AuthContext)
  const [services, setService] = useState([])
  const data = useLoaderData();
  console.log(data);
  // const { profile, overview, education, awards, services } = data;

  useEffect(() => {
    fetch(`http://localhost:5000/api/services/${user.email}`)
      .then(res => res.json())
      .then(data => setService(data))
  }, [user])



  return (
    <section>
      <PageCover pageName="Doctor Profile" />
      {/* Profile section */}

      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-4 ">
          {
            services.map((service, i) =>

              <div key={i}
                href="#"
                className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
              >
                <span
                  className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                ></span>

                <div className="sm:flex sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                      {service?.serviceName}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                  </div>

                  <div className="hidden sm:block sm:shrink-0">
                    <img
                      alt="Paul Clapton"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      className="h-16 w-16 rounded-lg object-cover shadow-sm"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <p className="max-w-[40ch] text-sm text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
                    provident a, ipsa maiores deleniti consectetur nobis et eaque.
                  </p>
                </div>

                <dl className="mt-6 flex gap-4 sm:gap-6">
                  <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">Published</dt>
                    <dd className="text-xs text-gray-500">31st June, 2021</dd>
                  </div>

                  <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                    <dd className="text-xs text-gray-500">3 minute</dd>
                  </div>
                </dl>
              </div>)
          }
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
