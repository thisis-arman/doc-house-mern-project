

const Contacts = () => {
    return (
        <div>
             <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">

            {/* <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2> */}
            {/* <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1> */}
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">

              <div className="flex rounded-lg h-full bg-[#07332F] text-white p-8 flex-col">

                <div className="flex items-center  mb-3">

                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">

                   <img src="../../../../doc-house Assets/watch.png" alt="" />
                  </div>
                  <h2 className=" text-xl title-font font-semibold">Opening Hours</h2>
                </div>

                <div className="flex-grow ">
                  <p className="leading-relaxed text-lg ">Open 9 am to 5 pm <br /> Everyday</p>
                  <a className="mt-3 text-green-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
            <div className="p-4 md:w-1/3">

              <div className="flex rounded-lg h-full text-white bg-[#F7A582] p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                
                    <img className="text-white" src="../../../../doc-house Assets/location-outline.png" alt="" />
                  </div>
                  <h2 className=" text-xl title-font font-semibold">Our Location</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">Katirhat,Hathazari,Chattogram <br />
                  Bangladesh</p>
                  <a className="mt-3 text-green-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
            <div className="p-4 md:w-1/3">

              <div className="flex rounded-lg h-full text-white bg-[#07332F] p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-base-100 p-1 text-white flex-shrink-0">
                   <img src="../../../../doc-house Assets/outgoing-call.png" alt="" />
                  </div>
                  <h2 className=" text-xl title-font font-semibold">Contact Us</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">+8801364826342 <br />
                  +880184729743</p>
                  <a className="mt-3 text-green-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
            
        </div>
    );
};

export default Contacts;