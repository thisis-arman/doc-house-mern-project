import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useAdmin = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch(`https://doc-house-server-thisis-arman.vercel.app/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                const isAdmin = data.find(data => data.role === 'admin');
                setIsAdmin(isAdmin);

            })
    }, [user])
    return [isAdmin]

}
export default useAdmin;