
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../../../src/react-tabs.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const OurServices = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, [])
    return (
        <div className="container relative top-[600px] mb-[500px] w-full mx-auto grid md:grid-cols-2 px-5 py-24 md:flex-row flex-col items-start">
            <div  data-aos="fade-up" data-aos-delay="400"  className=" ">
                <img className='' src="../../../../doc-house Assets/grilwithNotes.png" alt="" />
            </div>
            <div  data-aos="fade-down" data-aos-delay="400"  className="text-center md:text-left">
                <div>
                    <h2 className="text-3xl font-semibold py-10">Our Services</h2>
                    <p className='pb-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <div>
                <Tabs>
    <TabList className='py-6'>
      <Tab>Cavity Protection </Tab>
      <Tab>Cavity Protection </Tab>
      <Tab>Cavity Protection </Tab>
      
    </TabList>

    <TabPanel>
      <img className='py-4' src="../../../../doc-house Assets/teeth-x.png" alt="" />
      <h2 className='text-4xl py-4 font-semibold'>Electro  Gastrology Therapy</h2>
      <p className=''>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> <br />
      <p className='py-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      <button className='btn btn-secondary'>More Details</button>
    </TabPanel>
    <TabPanel>
      <img className='py-4' src="../../../../doc-house Assets/teeth-x.png" alt="" />
      <h2 className='text-4xl py-4'>Electro  Gastrology Therapy</h2>
      <p className=''>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> <br />
      <p className='py-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      <button className='btn btn-secondary btn-outline'>More Details</button>
    </TabPanel>
    <TabPanel>
      <img className='py-4' src="../../../../doc-house Assets/teeth-x.png" alt="" />
      <h2 className='text-4xl py-4'>Electro  Gastrology Therapy</h2>
      <p className=''>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> <br />
      <p className='py-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      <button className='btn btn-secondary'>More Details</button>
    </TabPanel>
   
  </Tabs>

                </div>

            </div>
            
        </div>
    );
};

export default OurServices;