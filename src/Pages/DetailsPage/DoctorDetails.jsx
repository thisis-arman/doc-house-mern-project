import { useLoaderData } from "react-router-dom";


const DoctorDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            details page
            
        </div>
    );
};

export default DoctorDetails;