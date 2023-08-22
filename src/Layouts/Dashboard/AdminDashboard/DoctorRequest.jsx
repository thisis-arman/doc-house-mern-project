import { useEffect } from "react";
import { useState } from "react";


const DoctorRequest = () => {

    const [doctorReq, setDoctorReq] = useState([])

    useEffect(() => {
        fetch(``)
    }, [])


    return (
        <div>
            <h1>Doctor request</h1>
        </div>
    );
};

export default DoctorRequest;