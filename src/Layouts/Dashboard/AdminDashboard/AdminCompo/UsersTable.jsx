import { Toaster, toast } from "react-hot-toast";
import { FiTrash2 } from "react-icons/fi"
import Swal from "sweetalert2";

const UsersTable = ({ users }) => {





    const makeAdmin = (user) => {
        fetch(`http://localhost:5000/api/users/${user._id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} Your are Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })


    }




    const handleDeleteUser = (user) => {
        console.log(`Delete`, user)
        fetch(`http://localhost:5000/users/${user._id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },

            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('User deleted successfully')
                    toast.success("User deleted successfully")
                }
            })
    }
    return (
        <div className="p-10">
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

            <div className="overflow-x-auto">
                <table className="min-w-full text-center divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right bg-base-200">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Profile
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Name
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Email
                            </th>

                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Bill
                            </th>
                            <th className="px-4 py-2"></th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 text-center">
                        {
                            users.map(user => <tr key={user._id}>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    {user?.name}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user?.email}</td>
                                {/* <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user?.number}</td> */}
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
                                <td className="whitespace-nowrap px-4 py-2">
                                    <a onClick={() => handleDeleteUser(user)}
                                        href="#"
                                        className="inline-block rounded  text-black text-xs font-medium bg-base-200 shadow-lg bg-opacity-10 "
                                    >
                                        <FiTrash2 className="w-5 h-5" />
                                    </a>
                                </td>
                                <td onClick={() => makeAdmin(user)} className="cursor-pointer px-2 py-1 m-2 bg-blue-700 text-white border rounded hover:bg-white hover:text-black hover:border-black">Make Admin</td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
            <Toaster />


        </div >
    );
};

export default UsersTable;