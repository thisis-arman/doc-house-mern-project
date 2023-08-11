

const UsersTable = ({ users }) => {
    return (
        <div>
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Name
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Email
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Phono Number
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Bill
                            </th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 text-center">
                        {
                            users.map(user => <tr key={user._id}>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    {user?.name}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user?.email}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user?.number}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
                                <td className="whitespace-nowrap px-4 py-2">
                                    <a
                                        href="#"
                                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                    >
                                        View
                                    </a>
                                </td>
                            </tr>)
                        }
                       


                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default UsersTable;