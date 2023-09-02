import { useState } from "react";
import { useEffect } from "react";
import UsersTable from "./AdminCompo/UsersTable";


const AllUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://doc-house-server-thisis-arman.vercel.app/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
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