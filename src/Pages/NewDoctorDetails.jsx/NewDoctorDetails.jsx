import { useLoaderData } from "react-router-dom";

import PageCover from "../../Components/PageCover";

import ServiceCard from "./ServiceCard";


const NewDoctorDetails = () => {
    const details = useLoaderData()
    // const [services, setService] = useState([])
    // const { user } = useContext(AuthContext)
    /*  console.log({ details })
     useEffect(() => {
         fetch(`https://doc-house-server-thisis-arman.vercel.app/services/${user.email}`)
             .then(res => res.json())
             .then(data => setService(data))
     }, [user]) */

    // const { profile, overview, education, awards, services } = details;
    return (
        <div>
            <PageCover pageName='Details/Appointment ' />


            <div className="container mx-auto  relative py-24  md:top-[250px] md:mb-[300px] ">
                <div className="grid md:grid-cols-2 gap-10 ">
                    {
                        details.map((service, i) => <ServiceCard key={i} service={service}></ServiceCard>

                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default NewDoctorDetails;

