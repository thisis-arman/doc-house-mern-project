import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { LiaEdit } from "react-icons/lia";
// import PageCover from "../../Components/PageCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import ProfileUpdate from "../../../Components/Modal/ProfileUpdate";

const MyProfile = () => {
  const data = useLoaderData();
  console.log({ data })
  const [profileForm, setProfileForm] = useState(true);
  console.log(data);
  const { profile, education, awards, services, overview } = data;

  let [isOpen, setIsOpen] = useState(true)

  const updateProfileInfo = () => {
    setProfileForm(profileForm => !profileForm)

  }



  return (
    <section className=" p-4 bg-gray-200">
      <h2 className="text-3xl font-bold pb-8 pt-4">My Profile...</h2>


      {/* Profile section */}
      <section className="md:flex   gap-4 ">

        <section className=" w-3/12  flex flex-col md:h-96 shadow-md  bg-white ">
          <figure className="w-32 h-32 mb-12 mx-auto pt-8 ">
            <img className="rounded-full " src={profile?.drImage} alt="" />
          </figure>
          <div className="mx-auto">
            <h2 className="text-2xl font-bold">{profile?.name}</h2>
            <p className="font-semibold">{profile?.expertise}</p>
            <button onClick={() => setIsOpen(!isOpen)} className="bg-blue-600 text-white mx-auto text-center px-4 flex items-center p-1 rounded-md shadow-sm"><LiaEdit className="w-6 h-6" /> <span>Edit Profile</span></button>
            <ProfileUpdate isOpen={isOpen} setIsOpen={setIsOpen} />
            <p className="font-bold text-center py-2">{profile?.numberOfReviews} Reviews</p>
            {/* TODO:react ratings apply here */}
          </div>
        </section>

        {/* Overview Section */}
        <section className=" shadow-black body-font overflow-hidden w-9/12  ">
          <Tabs>

            <div className="  mb-4  bg-white">
              <TabList className="  p-4 rounded ">
                <div className="flex  ">
                  <Tab className="border-b-2 hover:cursor-pointer mr-4 hover:bg-gray-300 ">
                    Overview
                  </Tab>
                  <Tab className=" border-b-2 hover:cursor-pointer hover:bg-gray-300 mr-4">
                    Locations
                  </Tab>
                  <Tab className=" border-b-2 hover:cursor-pointer hover:bg-gray-300 mr-4">
                    Reviews
                  </Tab>
                  <Tab className=" border-b-2 hover:cursor-pointer hover:bg-gray-300 mr-4">
                    Business Hours
                  </Tab>
                </div>
              </TabList>
            </div>


            <div className="container px-5 pb-24 mx-auto  bg-white   md:mb-20">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <div className=" w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">





                  <TabPanel>
                    <div className="">
                      {/* About me */}
                      {/* <div suppressContentEditableWarning={true} contentEditable id="about-text"  className="pb-2">{aboutMe ||'N/A'}</div> */}

                      <div>
                        <h2 className="text-xl py-2 font-bold">About Me</h2>
                        <p>
                          {overview?.aboutMe}
                        </p>
                      </div>
                      <div>
                        <h2 className="text-xl py-2 font-bold">Education</h2>
                        {education.map((edu, i) => <div className="py-2" key={i}>
                          <h2 className="font-bold">{edu.institution}</h2>
                          <p>{edu.nameOfDegree}</p>
                          <p>{edu.Duration}</p>
                        </div>)}

                      </div>

                      {/* <button  onClick={updatedAbout}  className="btn  btn-primary">save changes</button> */}

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

                </div>
              </div>
            </div>
          </Tabs>
        </section>

      </section>
    </section>
  );
};

export default MyProfile;
