import { useEffect, useState } from "react";
import { FcHome } from 'react-icons/fc';

const AdminHome = () => {

  const [users,setUsers]=useState([])

  useEffect(()=>{
      fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  },[])

    return (
        <div>
            <section className="bg-gradient-to-l from-[#eae9f5] via-[#faf0f2] to-[#ecedf3]">
  <div className="mx-auto max-w-screen-2xl px-4 py-12 ">
    <div className="mx-auto max-w-5xl text-left">
      <h2 className="text-3xl font-bold  sm:text-4xl">
        Overview
      </h2>

      <p className="mt-4 text-gray-500 sm:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
        laborum labore provident impedit esse recusandae facere libero harum
        sequi.
      </p>
    </div>

    <div className="mt-8 sm:mt-12">
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex gap-4 p-2 border shadow-md shadow-white">
          <FcHome className='w-10 h-10'/>
          
          <div>
            <p className="text-2xl font-bold text-blue-600">{users?.length}</p>
            <h2 className="text-2xl font-semibold ">Total Users </h2>
          </div>
        </div>

        <div
          className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
        >
          <dt className="order-last text-lg font-medium text-gray-500">
            Official Addons
          </dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
        </div>

        <div
          className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
        >
          <dt className="order-last text-lg font-medium text-gray-500">
            Total Addons
          </dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
        </div>
      </dl>
    </div>
  </div>
</section>
        </div>
    );
};

export default AdminHome;