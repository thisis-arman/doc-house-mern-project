import { useEffect, useState } from "react";
import PageCover from "../../Components/PageCover";
import Calendar from "moedim";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CosmeticService from "../../Components/Services/CosmeticService";
import SubServices from "../../Components/Services/SubServices";
import ServiceCard from "../NewDoctorDetails.jsx/ServiceCard";
// import "react-tabs/style/react-tabs.css";

const AppointmentPage = () => {
  // const [value, setValue] = useState(new Date());
  const [services, setServices] = useState([]);
  console.log(services);
  // console.log(value.split(' ').slice(0,4).join(' '))

  useEffect(() => {
    fetch("https://doc-house-server-thisis-arman.vercel.app/api/services")
      .then((res) => res.json())
      .then((data) => {
        const services = data.filter(service => service.status == 'active')
        setServices(services)
      });
  }, []);

  return (
    <div>
      <PageCover pageName={"Appointment"} />
      <section className="container mx-auto relative md:top-[320px]  top-6 min-h-screen md:mb-[400px]">
        <div className="grid md:grid-cols-3 gap-6 grid-cols-1 ">
          {
            services.map((service, i) => <ServiceCard key={i} service={service}></ServiceCard>)
          }
        </div>


      </section>

    </div>
  );
};

export default AppointmentPage;
