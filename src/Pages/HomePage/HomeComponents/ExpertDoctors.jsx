import { useEffect } from "react";
import { useState } from "react";
import DoctorCard from "./DoctorCard";


const ExpertDoctors = () => {
const [doctors,setDoctor]=useState([])

useEffect(()=>{
    fetch('http://localhost:5000/doctors')
    .then(res =>res.json())
    .then(data =>setDoctor(data))
},[])







    return (
      <section className="container mx-auto">
        <div className="text-center py-10 px-8">
            <h1 className="text-3xl sm:text-5xl font-bold py-4">Our Expert Doctors</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique <br /> cumque vero perferendis quibusdam vitae vel unde ut deserunt quia ipsum!</p>
        </div>
          <div className="grid md:grid-cols-3 grid-cols-1 px-4 gap-4">

{
  doctors.map((data,i) => <DoctorCard brief={data} key={i}/>)
}
            
        </div>
      </section>
    );
};

export default ExpertDoctors;