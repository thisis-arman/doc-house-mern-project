

const TableRow = ({ data }) => {
  console.log(data, 'from table row')
  return (
    <div>


      <div className="overflow-x-auto rounded-md shadow-md">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
                Time
              </th>
              <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
                Date
              </th>
              <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
                Number
              </th>
              <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
                Fee
              </th>
              <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
                Status
              </th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-center">
            {
              data.map(data =>
                <tr key={data._id}>
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
                    {data?.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-gray-700">{data?.time}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-gray-700">{data?.date}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-gray-700">{data?.number}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-gray-700">${data?.consultFee}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-gray-700">Pending</td>
                  {/*  <td className="whitespace-nowrap px-4 py-3">
                    <a
                      href="#"
                      className="inline-block rounded bg-green-700 px-4 py-3 text-xs font-medium text-white hover:bg-green-900"
                    >
                      Pay
                    </a>
                  </td> */}
                </tr>
              )
            }
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default TableRow;