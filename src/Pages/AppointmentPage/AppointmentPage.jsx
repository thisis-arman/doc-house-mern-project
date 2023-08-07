import { useState } from "react";
import PageCover from "../../Components/PageCover";
import Calendar from 'moedim';


const AppointmentPage = () => {
    const [value, setValue] = useState(new Date())
    return (
        <div>
            <PageCover pageName={"Appointment"}  />
            <section className="background-image-chair relative top-[400px]  h-screen mb-[400px]">
           
           <div className="w-5/6 mx-auto md:flex justify-center gap-16 items-center">
           <div>
                
                <Calendar value={value} onChange={(d) => setValue(d)} />

               </div>
               <div>
                <img className="w-4/5" src="../../../doc-house Assets/chair 1.png" alt="" />
               </div>
           </div>

            </section>
            
        </div>
    );
};

export default AppointmentPage;