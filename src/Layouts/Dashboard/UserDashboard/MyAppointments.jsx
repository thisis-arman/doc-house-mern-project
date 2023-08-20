import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useState } from "react";
import TableRow from "./UserDashCompo/TableRow";


const MyAppointments = () => {
    const { user } = useContext(AuthContext)
    const [appointments, setAppointment] = useState([])
    const [users, setUsers] = useState([])
    const currentUser = users.find(d => d.name == user.displayName)
    // console.log(data.doctorID, 'checking user--')
    console.log(appointments, 'appointments')



    // console.log(user.doctorID)
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                const doctor = data.filter(d => d.role == "doctor")
                setUsers(doctor)
            })
    }, [])
    useEffect(() => {

        fetch(`http://localhost:5000/api/appointments/${currentUser?.doctorID}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [currentUser])
    return (
        <div className="p-6">
            <h2 className="py-6 text-3xl font-bold">My Appointments</h2>

            <TableRow data={appointments} />



        </div>
    );
};

export default MyAppointments;