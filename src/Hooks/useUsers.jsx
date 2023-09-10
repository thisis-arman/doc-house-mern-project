import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";

const useUsers = () => {

    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],

        queryFn: async () => {
            const res = await axiosSecure.get(`/users`);
            console.log(res.data)
            return res.data;
        }
    })
    return [users, isLoading, refetch]
}
export default useUsers;