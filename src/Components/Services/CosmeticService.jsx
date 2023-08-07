import { useEffect, useState } from "react";


const CosmeticService = () => {
const [teeths,setTeeths]=useState([])
console.log(teeths)

    useEffect(()=>{
        fetch('http://localhost:5000/get-service-data/Cosmetic-Orthodontics')
        .then(res=> res.json())
        .then(data => setTeeths(data))

    },[])
    return (
        <div className="grid grid-cols-3 gap-4 justify-between">
            {
                teeths.map((data,i)=> 
                <div className="border bg-base-100 flex items-center justify-center shadow p-4 rounded" key={i}>

                   <div className="">
                   <img className="w-2/4 mx-auto" src={data.image} alt="" />
                    <h2 className="text-2xl py-2 font-bold">{data.services}</h2>
                    <p className="text-center">{data.time}</p>
                    <button className="btn btn-secondary my-4">Book Appointment</button>
                   </div>
                    
                    
                     </div>)
            }

            
        </div>
    );
};

export default CosmeticService;