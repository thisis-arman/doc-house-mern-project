import { Link } from "react-router-dom";


const DoctorCard = ({brief}) => {
    console.log(brief)
    const {profile,_id}=brief;
    return (
        <div>
            <div className="card md:w-96 border rounded-lg bg-base-100 shadow-sm">
  <figure className="px-4  py-4">
    <img src={profile.drImage} alt="Shoes" className="rounded-xl w-full" />
  </figure>
  <div className="px-4 py-4 ">
    <h2 className="card-title text-2xl py-1 font-bold">{profile?.name}</h2>
    <p className="text-lg font-semibold text-[#6C6B6B] ">{profile?.expertise}</p>
    <p className="py-2"><img src="../../../../doc-house Assets/rating.png" alt="" /></p>
    <hr className="py-2" />
    <div className="flex gap-4 items-center">
        <img src="../../../../doc-house Assets/location.png" alt="" />
        <p className="text-[#877e7e]">{profile?.Chamber}</p>
    </div>
    <div className="flex gap-4 py-2 items-center">
        <img src="../../../../doc-house Assets/date.png" alt="" />
        <p className="text-[#877e7e]">Available On Mon, 22 July</p>
    </div>
    <div className="flex gap-4  items-center">
        <img src="../../../../doc-house Assets/dollar.png" alt="" />
        <p className="text-[#877e7e]"> ${profile.consultFee}</p>
    </div>
    <div className="card-actions py-4">
     <Link to={`/doctor/${_id}`} className="btn w-full btn-outline text-[#F7A582] hover:bg-[#F7A582] hover:text-white"
    >Book Appointment
     </Link>
    </div>
  </div>
</div>


            
        </div>
    );
};

export default DoctorCard;