import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useAdmin = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                const isAdmin = data.find(data => data.role === 'admin');
                setIsAdmin(isAdmin);

            })
    }, [user])
    return [isAdmin]

}
export default useAdmin;