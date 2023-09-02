import { useEffect, useState } from "react";
import PageCover from "../../Components/PageCover";
import Calendar from "moedim";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CosmeticService from "../../Components/Services/CosmeticService";
import SubServices from "../../Components/Services/SubServices";
// import "react-tabs/style/react-tabs.css";

const AppointmentPage = () => {
  const [value, setValue] = useState(new Date());
  const [services, setServices] = useState([]);
  console.log(services);
  // console.log(value.split(' ').slice(0,4).join(' '))

  useEffect(() => {
    fetch("https://doc-house-server-thisis-arman.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <PageCover pageName={"Appointment"} />
      <section className="background-image-chair relative md:top-[400px]  top-6 min-h-screen md:mb-[400px]">
        {/* Calender */}
        <div className="md:w-5/6  mx-auto flex md:flex-row flex-col-reverse justify-center gap-16  items-center">
          <div className="w-3/5 mx-auto">
            <Calendar className='w-96' value={value} onChange={(d) => setValue(d)} />
          </div>
          <div>
            <img
              className="md:w-4/5 mt-6 md:mt-0 w-full"
              src="https://i.ibb.co/P9Djp5K/chair-1.png"
              alt=""
            />
          </div>
        </div>

        {/* Services */}
        <section>
          <div className="text-center py-10">
            <p>{`Available Service on  `}</p>
            <h2 className="text-4xl font-bold py-4">Please Select A Service</h2>
          </div>
          {/* Tailblocks  start here */}
          <div className="">
            <section className="text-gray-600 body-font ">
              <div className="container md:px-5 py-16 mx-auto ">
                <Tabs>
                  <TabList>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  -m-2">

                      {services.map((data) => (
                        <Tab className=' p-2 ' key={data._id}>
                          <div

                            className=" border "
                          >
                            <div className="h-full flex items-center border-gray-200  p-4 rounded-lg">
                              <img
                                alt="team"
                                className=" bg-red-200 p-4   rounded-xl mr-4"
                                src={data?.image}
                              />
                              <div className="flex-grow">
                                <h2 className="text-gray-900 text-xl font-bold">
                                  {data?.services}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </Tab>
                      ))}
                    </div>


                  </TabList>
                  <h2 className="text-3xl py-12 font-bold text-center">Available slots for Appointment</h2>
                  <TabPanel>
                    <SubServices category="Cavity%20Orthodontics" />
                  </TabPanel>
                  <TabPanel>
                    <CosmeticService />
                  </TabPanel>
                  <TabPanel>
                    <SubServices category="Cosmetic-Orthodontics" />
                  </TabPanel>
                  <TabPanel>
                    <SubServices category="Cavity%20Orthodontics" />
                  </TabPanel>
                </Tabs>
              </div>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AppointmentPage;
