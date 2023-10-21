import { useEffect } from "react";
import PageCover from "../../../Components/PageCover";
import Aos from "aos";
import 'aos/dist/aos.css';


const Kidney = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, [])


    return (
        <>

            <PageCover pageName={"Kidney Guidelines"} />
            <div className=" container mx-auto relative md:top-[350px] px-4 top-6 min-h-screen md:mb-[450px] mb-20">
                <section className="grid md:grid-cols-2 gap-6 grid-cols-1 min-h-fit ">
                    <div data-aos="fade-up" data-aos-delay="100" className="border rounded-sm shadow-sm px-8 py-4 ">
                        <h2 className="text-2xl font-bold"><span ><img className="w-10 h-10" src="https://i.ibb.co/xfzqgnx/vegetable-1.png" alt="" /></span>Low-Potassium Vegetables</h2>
                        <ul className="p-4">
                            <li className="list-disc">Green beans</li>
                            <li className="list-disc">Cauliflower</li>
                            <li className="list-disc">Cabbage</li>
                            <li className="list-disc">Summer squash</li>
                            <li className="list-disc">Lettuce (romaine or iceberg)</li>
                            <li className="list-disc">Onions (in moderation)</li>

                        </ul>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="150" className="border rounded-sm shadow-sm px-8 py-4 ">
                        <h2 className="text-2xl font-bold"><span ><img className="w-10 h-10" src="https://i.ibb.co/DzkYK7P/fruit.png" alt="" /></span>Low-Potassium Fruits</h2>
                        <ul className="p-4">
                            <li className="list-disc">Apples (peeled)</li>
                            <li className="list-disc">Berries (strawberries, blueberries, raspberries)</li>
                            <li className="list-disc">Grapes (in moderation)</li>
                            <li className="list-disc"> Pineapple (in moderation)</li>


                        </ul>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200" className="border rounded-sm shadow-sm px-8 py-4 ">
                        <h2 className="text-2xl font-bold"><span ><img className="w-10 h-10" src="https://i.ibb.co/gSCbTpk/yellow-rice.png" alt="" /></span>Low-Potassium Proteins</h2>
                        <ul className="p-4">

                            <li className="list-disc">Egg whites (without yolks)</li>
                            <li className="list-disc">Skinless chicken or turkey breast</li>
                            <li className="list-disc">Tofu (rinse and drain to remove excess potassium)</li>
                            <li className="list-disc">Rice-based protein alternatives (in moderation)</li>

                        </ul>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="250" className="border rounded-sm shadow-sm px-8 py-4 ">
                        <h2 className="text-2xl font-bold"><span ><img className="w-10 h-10" src="https://i.ibb.co/wKsT3Sj/bread.png" alt="" /></span>Grains and Starches</h2>
                        <ul className="p-4">
                            <li className="list-disc">White rice (rinse it to reduce potassium)</li>
                            <li className="list-disc">White bread</li>
                            <li className="list-disc">Pasta (in moderation)</li>
                            <li className="list-disc">Cornflakes or rice-based cereals</li>


                        </ul>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" className="border rounded-sm shadow-sm px-8 py-4 ">
                        <h2 className="text-2xl font-bold"><span ><img className="w-10 h-10" src="https://i.ibb.co/sm723mX/dairy-products.png" alt="" /></span>Dairy Alternatives</h2>
                        <ul className="p-4">
                            <li className="list-disc">Non-dairy creamer with lower potassium</li>
                            <li className="list-disc">Rice milk</li>
                            <li className="list-disc">Unsweetened almond milk</li>
                        </ul>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="350" className="border rounded-sm shadow-sm px-8 py-4 ">
                        <h2 className="text-2xl font-bold"><span ><img className="w-10 h-10" src="https://i.ibb.co/XpGFZf5/sweets.png" alt="" /></span>Desserts</h2>
                        <ul className="p-4">
                            <li className="list-disc">Hard candies</li>
                            <li className="list-disc">Sorbet</li>
                            <li className="list-disc">Jelly or jam (in moderation)</li>
                        </ul>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400" className="border rounded-sm shadow-sm px-8 py-4 ">
                        <h2 className="text-2xl font-bold"><span ><img className="w-10 h-10" src="https://i.ibb.co/stW6q6M/nachos.png" alt="" /></span>Snacks</h2>
                        <ul className="p-4">
                            <li className="list-disc">Rice crackers (in moderation)</li>
                            <li className="list-disc">Unsalted popcorn (in moderation)</li>
                            <li className="list-disc">Unsalted rice cakes</li>
                            <li className="list-disc">Homemade low-potassium trail mix (using allowed nuts, seeds, and dried fruits)</li>
                        </ul>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400" className="border rounded-sm shadow-sm px-8 py-4 ">
                        <h2 className="text-2xl font-bold"><span ><img className="w-10 h-10" src="https://i.ibb.co/XpGFZf5/sweets.png" alt="" /></span>Beverage</h2>
                        <ul className="p-4">
                            <li className="list-disc">Clear broths</li>
                            <li className="list-disc">Herbal teas (without hibiscus)</li>
                            <li className="list-disc">Water(Limited)</li>

                        </ul>
                    </div>

                </section>

            </div>

        </>

    );
};

export default Kidney;