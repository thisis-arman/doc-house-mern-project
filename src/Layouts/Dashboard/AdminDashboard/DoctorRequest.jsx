import { useEffect } from "react";
import { useState } from "react";


const DoctorRequest = () => {

    const [doctorReq, setDoctorReq] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => {

                const pendingDoctor = data.filter(data => data.role === "doctor" && data.status === "pending")
                setDoctorReq(pendingDoctor)
                console.log(pendingDoctor)


            })
    }, [])



    return (
        <div>
            <h1>Doctor request  {doctorReq.length}</h1>
        </div>
    );
};

export default DoctorRequest;