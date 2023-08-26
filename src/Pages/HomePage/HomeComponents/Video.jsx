// import { AiFillPlayCircle } from "react-icons/ai";

import { AiFillPlayCircle } from "react-icons/ai";



const Video = () => {
    return (
        <section className="container mx-auto px-4">
            <div className="relative md:top-[650px] top-[500px]">
                <div className="md:max-w-3xl py-16 pb-12">
                    <p className="md:text-2xl text-md text-red-500 font-semibold ">Perfect Life made easy</p>
                    <h2 className="sm:text-6xl text-4xl font-bold md:pt-8 pt-4">Start your journey
                        to healthy & beautiful Life</h2>
                </div>
                <div>
                    <div className="rounded-2xl md:w-3/4 mx-auto bg-[url(https://i.ibb.co/ZzdX7Bs/Photo-for-video.jpg)] bg-cover bg-center bg-base-content bg-no-repeat h-96">



                        <span className="flex py-36 justify-center"><label htmlFor="my_modal_7" ><AiFillPlayCircle className="w-20  h-20  text-red-500" /></label></span>


                    </div>
                    {/* <label htmlFor="my_modal_7" className="btn">open modal</label> */}

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                    <div className="modal">

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/KmYm6zphh_A?si=2a9tajhbGuYLbPVp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        {/*  <div className="modal-box">
                            <h3 className="text-lg font-bold">Hello!</h3>
                            <p className="py-4">This modal works with a hidden checkbox!</p>
                        </div> */}
                        <label className="modal-backdrop" htmlFor="my_modal_7"></label>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Video;