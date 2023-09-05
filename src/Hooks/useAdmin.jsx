import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useAdmin = ({ email }) => {
    const { user } = useContext(AuthContext)
    const [isAdmin, setIsAdmin] = useState()

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/get-users/admin/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsAdmin(data.isAdmin);

                })
        }
    }, [email])
    return [isAdmin]

}
export default useAdmin;