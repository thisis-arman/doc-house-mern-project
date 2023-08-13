import { useLoaderData } from "react-router-dom";
import PageCover from "../../Components/PageCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const DoctorDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { profile, overview, education, awards, services } = data;

const updatedAbout =()=>{
 const currentAbout = document.getElementById('about-text')
 const updatedAbout = currentAbout.innerText;
 console.log(updatedAbout)

}
  

  return (
    <section>
      <PageCover pageName="Doctor Profile" />
      {/* Profile section */}
      <section className="bg-[#E6E7EE]">

        <section className="text-gray-600 body-font overflow-hidden ">
          <div className="container rounded-md  py-24 relative top-[320px] mb-[300px] mx-auto shadow-white ">
            <div className="bg-[#e6e7ee] mx-auto flex flex-wrap shadow-2xl shadow-white drop-shadow-2xl  border border-gray-50 p-6">
              <img
                alt="doctor"
                className="lg:w-1/2 w-full   object-cover object-center rounded-none"
                src={profile?.drImage}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {profile?.name}
                </h1>
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {profile?.expertise}
                </h2>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </a>
                  </span>
                </div>

                <div className="flex gap-4 items-center">
                  <img src="../../../../doc-house Assets/location.png" alt="" />
                  <p className="text-[#877e7e]">{profile?.Chamber}</p>
                </div>
                <div>
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>

            
                <div>
                  <button className="btn btn-outline mr-4 my-4 py-0 hover:bg-gray-400 hover:text-black">
                    {profile?.services[0]}
                  </button>
                  <button className="btn btn-outline my-4 hover:bg-gray-400 hover:text-black">
                    {profile?.services[1]}
                  </button>
                </div>
               
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="text-gray-600 body-font overflow-hidden  ">
          <div className="container px-5 pb-24 mx-auto   shadow-2xl shadow-white drop-shadow-2xl  border border-gray-50 md:mb-20">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <div className=" w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <Tabs>
                  <div className="flex mb-4">
                    <TabList className="w-full bg-base-300 p-4 rounded ">
                      <div className="flex  ">
                        <Tab className="border w-full mr-4 hover:bg-gray-300 ">
                          Overview
                        </Tab>
                        <Tab className="w-full border hover:bg-gray-300 mr-4">
                          Locations
                        </Tab>
                        <Tab className="w-full border hover:bg-gray-300 mr-4">
                          Reviews
                        </Tab>
                        <Tab className="w-full border hover:bg-gray-300 mr-4">
                          Business Hours
                        </Tab>
                      </div>
                    </TabList>
                  </div>

                

                  <TabPanel>
                    <div>
                      {/* About me */}
                      <h2 className="text-xl py-2 font-bold">About Me</h2>
                      <div suppressContentEditableWarning={true} contentEditable id="about-text"  className="pb-2">{overview?.aboutMe}</div>
                      {/* <button onClick={updatedAbout}   className="btn btn-primary">save changes</button> */}
                      <div className="grid md:grid-cols-2  grid-cols-1  ">
                        {/* Education */}
                        <div>
                          <h2 className="text-xl py-2 font-bold">Education</h2>
                          <p>
                            <li className="text-md font-bold ">
                              {education[0]?.institution}
                            </li>
                            <p className="pl-6">{education[0]?.nameOfDegree}</p>
                            <p className="pl-6">{education[0]?.Duration}</p>
                          </p>
                          <p className="py-4">
                            <li className="text-md font-bold ">
                              {education[1]?.institution}
                            </li>
                            <p className="pl-6">{education[1]?.nameOfDegree}</p>
                            <p className="pl-6">{education[1]?.Duration}</p>
                          </p>
                          <p className="py-4">
                            <li className="text-md font-bold ">
                              {education[2]?.institution}
                            </li>
                            <p className="pl-6">{education[2]?.nameOfDegree}</p>
                            <p className="pl-6">{education[2]?.Duration}</p>
                          </p>
                        </div>

                        {/* Awards */}
                        <div>
                          <h2 className="text-xl py-2 font-bold ">Awards</h2>
                          <div className="pl-6">
                            {awards.map((data, i) => (
                              <p className="py-2" key={i}>
                                <h3 className="font-bold list-item text-md">
                                  {data.awardName}
                                </h3>
                                <p className="py-2">{data.details}</p>
                              </p>
                            ))}
                          </div>
                        </div>
                        {/* Services */}

                        <div>
                          <h2 className="text-xl py-2 font-bold">Services</h2>
                          <ol className="pl-6 py-2">
                            {services.map((data, i) => (
                              <li className="list-disc " key={i}>
                                {data}
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <p className="leading-relaxed mb-4">
                      Fam locavore kickstarter distillery. Mixtape chillwave
                      tumeric sriracha taximy chia microdosing tilde DIY. XOXO
                      fam inxigo juiceramps cornhole raw denim forage brooklyn.
                      Everyday carry +1 seitan poutine tumeric. Gastropub blue
                      bottle austin listicle pour-over, neutra jean.
                    </p>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default DoctorDetails;
