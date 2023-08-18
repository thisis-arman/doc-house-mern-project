import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const UserAppointments = () => {
    const { user } = useContext(AuthContext)
    const [appointments, setAppointments] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${user.email}`)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [user])



    return (
        <div>
            <h2 className="text-4xl font-bold">MY Appointments</h2>



        </div>
    );
};

export default UserAppointments;