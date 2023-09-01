import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useDoctor = () => {
    const { user } = useContext(AuthContext)
    const [isDoctor, setIsDoctor] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(users => {
                const data = users.filter(u => u.email == user.email)
                const isDoctor = data.find(d => d.role == 'doctor' && d.status == "active");
                setIsDoctor(isDoctor);
            })
    }, [user])
    return [isDoctor]

}
export default useDoctor;