

const PageCover = ({ pageName }) => {

    return (
        <section className="bg-[#07332F] absolute w-full top-0 ">
           
            <div className="px-36 hidden  py-32 md:flex flex-col justify-center  w-full ">
            <div className="text-sm text-white breadcrumbs">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a>{pageName}</a></li>
                 
                </ul>
            </div>
                <h2 className="text-4xl font-bold text-white">{pageName}</h2>

            </div>

            {/* Profile section */}

            

        </section>
    );
};

export default PageCover;