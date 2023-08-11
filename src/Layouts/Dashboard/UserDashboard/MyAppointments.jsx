import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useState } from "react";
import TableRow from "./UserDashCompo/TableRow";


const MyAppointments = () => {
    const {user}=useContext(AuthContext)
    const [appointments,setAppointment]= useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/appointments/${user.email}`)
        .then(res =>res.json())
        .then(data => setAppointment(data) )
    })
    return (
        <div>
<h2 className="py-6 text-3xl font-bold">My Appointments</h2>

<TableRow  data={appointments}/>


            
        </div>
    );
};

export default MyAppointments;