

const ExpertDoctors = () => {
    return (
      <section className="container mx-auto">
        <div className="text-center py-10 px-8">
            <h1 className="text-4xl font-bold py-4">Our Expert Doctors</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique <br /> cumque vero perferendis quibusdam vitae vel unde ut deserunt quia ipsum!</p>
        </div>
          <div className="grid md:grid-cols-3 grid-cols-1 px-4 gap-4">

<div className="card md:w-96 border rounded-lg bg-base-100 shadow-sm">
  <figure className="px-4  py-4">
    <img src="../../../../doc-house Assets/doctor-1.png" alt="Shoes" className="rounded-xl w-full" />
  </figure>
  <div className="px-4 py-4 ">
    <h2 className="card-title text-2xl py-1 font-bold">Karyen Anderson</h2>
    <p className="text-lg font-semibold text-[#6C6B6B] ">Cardiologist</p>
    <p className="py-2"><img src="../../../../doc-house Assets/rating.png" alt="" /></p>
    <hr className="py-2" />
    <div className="flex gap-4 items-center">
        <img src="../../../../doc-house Assets/location.png" alt="" />
        <p className="text-[#877e7e]">Dhanmondi, Dhaka, Bangladesh</p>
    </div>
    <div className="flex gap-4 py-2 items-center">
        <img src="../../../../doc-house Assets/date.png" alt="" />
        <p className="text-[#877e7e]">Available On Mon, 22 July</p>
    </div>
    <div className="flex gap-4  items-center">
        <img src="../../../../doc-house Assets/dollar.png" alt="" />
        <p className="text-[#877e7e]"> $15</p>
    </div>
    <div className="card-actions py-4">
      <button className="btn w-full btn-outline text-[#F7A582] hover:bg-[#F7A582] hover:text-white">Buy Now</button>
    </div>
  </div>
</div>
<div className="card border rounded-lg md:w-96 bg-base-100 shadow-sm">
  <figure className="px-4 py-4">
    <img src="../../../../doc-house Assets/doctor-2.png" alt="Shoes" className="rounded-xl w-full" />
  </figure>
  <div className="px-4 py-4 ">
    <h2 className="card-title text-2xl py-1 font-bold">Karyen Anderson</h2>
    <p className="text-lg font-semibold text-[#6C6B6B] ">Cardiologist</p>
    <p className="py-2"><img src="../../../../doc-house Assets/rating.png" alt="" /></p>
    <hr className="py-2" />
    <div className="flex gap-4 items-center">
        <img src="../../../../doc-house Assets/location.png" alt="" />
        <p className="text-[#877e7e]">Dhanmondi, Dhaka, Bangladesh</p>
    </div>
    <div className="flex gap-4 py-2 items-center">
        <img src="../../../../doc-house Assets/date.png" alt="" />
        <p className="text-[#877e7e]">Available On Mon, 22 July</p>
    </div>
    <div className="flex gap-4  items-center">
        <img src="../../../../doc-house Assets/dollar.png" alt="" />
        <p className="text-[#877e7e]"> $15</p>
    </div>
    <div className="card-actions py-4">
      <button className="btn w-full btn-outline  text-[#F7A582] hover:bg-[#F7A582] hover:text-white">Buy Now</button>
    </div>
  </div>
</div>
<div className="card md:w-96 border rounded-lg bg-base-100 shadow-sm">
  <figure className="px-4 pt-4">
    <img src="../../../../doc-house Assets/doctor-3.png" alt="Shoes" className=" w-full" />
  </figure>

  <div className="px-4 py-4 ">
    <h2 className="card-title text-2xl py-1 font-bold">Karyen Anderson</h2>
    <p className="text-lg font-semibold text-[#6C6B6B] ">Cardiologist</p>
    <p className="py-2"><img src="../../../../doc-house Assets/rating.png" alt="" /></p>
    <hr className="py-2" />
    <div className="flex gap-4 items-center">
        <img src="../../../../doc-house Assets/location.png" alt="" />
        <p className="text-[#877e7e]">Dhanmondi, Dhaka, Bangladesh</p>
    </div>
    <div className="flex gap-4 py-2 items-center">
        <img src="../../../../doc-house Assets/date.png" alt="" />
        <p className="text-[#877e7e]">Available On Mon, 22 July</p>
    </div>
    <div className="flex gap-4  items-center">
        <img src="../../../../doc-house Assets/dollar.png" alt="" />
        <p className="text-[#877e7e]"> $15</p>
    </div>
    <div className=" py-4">
      <button className="btn w-full btn-outline  text-[#F7A582] hover:bg-[#F7A582] hover:text-white">Buy Now</button>
    </div>
  </div>
</div>
            
        </div>
      </section>
    );
};

export default ExpertDoctors;