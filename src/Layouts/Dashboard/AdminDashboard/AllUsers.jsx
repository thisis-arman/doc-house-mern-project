import { useState } from "react";
import { useEffect } from "react";
import UsersTable from "./AdminCompo/UsersTable";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useUsers from "../../../Hooks/useUsers";


const AllUsers = () => {

    // const [axiosSecure] = useAxiosSecure()
    const [users] = useUsers()
    console.log(users)





    return (
        <div>
            <h2 className="text-3xl font-bold py-6">All Users</h2>

            <div>
                <UsersTable users={users} />
            </div>



        </div>
    );
};

export default AllUsers;