import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useDoctor = () => {
    const { user } = useContext(AuthContext);
    const [isDoctor, setIsDoctor] = useState();

    useEffect(() => {
        fetch(`https://doc-house-server-thisis-arman.vercel.app/users/${user?.email}`)
            .then((res) => res.json())
            .then((users) => {
                // Check if the 'users' array contains a doctor with an active status
                const doctor = users.find((user) => user.role === 'doctor' && user.status === 'active');

                // Set the 'isDoctor' state based on the result
                setIsDoctor(!!doctor); // This will set 'isDoctor' to 'true' if a doctor is found, otherwise 'false'
            });
    }, [user]);

    return [isDoctor];
};

export default useDoctor;
