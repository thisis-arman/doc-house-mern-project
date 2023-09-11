import { useEffect } from "react";
import { useState } from "react";
import DoctorCard from "./DoctorCard";
import Aos from 'aos';
import 'aos/dist/aos.css';
// import { useEffect } from 'react';

const ExpertDoctors = () => {
  const [doctors, setDoctor] = useState([])
  console.log(doctors)

  useEffect(() => {
    fetch('http://localhost:5000/api/all-info')
      .then(res => res.json())
      .then(data => setDoctor(data))
  }, [])

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, [])






  return (
    <section className="container mx-auto">
      <div className="text-center py-10 px-8">
        <h1 className="text-3xl sm:text-5xl font-bold py-4">Our Expert Doctors</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique <br /> cumque vero perferendis quibusdam vitae vel unde ut deserunt quia ipsum!</p>
      </div>
      <div data-aos="fade-up" data-aos-delay="300" className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 px-4 gap-4 md:gap-4">

        {
          doctors.map((data, i) => <DoctorCard brief={data} key={i} />)
        }

      </div>
    </section>
  );
};

export default ExpertDoctors;