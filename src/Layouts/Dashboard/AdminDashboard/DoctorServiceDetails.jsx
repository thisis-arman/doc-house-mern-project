import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const DoctorServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const [pendingServices, setPendingServices] = useState([])
    const [activeServices, setActiveServices] = useState([])
    console.log('setPendingServices', pendingServices)
    useEffect(() => {
        fetch(`http://localhost:5000/api/services`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const pendingService = data.filter(d => d.status == 'pending')
                const activeService = data.filter(data => data.status === 'active')
                setPendingServices(pendingService)
                setActiveServices(activeService)

            })
    }, [])
    return (
        <div>
            {/* <h2>Active Status {service.length}</h2> */}


            {pendingServices.length}
            {activeServices.length}

        </div>
    );
};

export default DoctorServiceDetails;