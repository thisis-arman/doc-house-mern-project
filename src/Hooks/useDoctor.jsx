import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useDoctor = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const { data: isDoctor, isLoading: isDoctorLoading } = useQuery({
        queryKey: ['isDoctor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/doctor/${user?.email}`);
            console.log(res.data.doctor)
            return res.data.doctor;
        }
    })
    return [isDoctor, isDoctorLoading]
}
export default useDoctor;