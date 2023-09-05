
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
    <div className="container relative md:top-[600px] top-[500px] mb-[400px] md:mb-[500px]  w-full mx-auto grid md:grid-cols-2 gap-4 px-5 pb-24 md:flex-row flex-col items-center">
      <div data-aos="fade-up" data-aos-delay="400" className=" ">
        <img className='' src="https://i.ibb.co/Tc2q8K7/grilwith-Notes.png" alt="" />
      </div>
      <div data-aos="fade-down" data-aos-delay="400" className="text-center md:text-left">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold py-4">Our Services</h2>
          <p className='pb-4 text-left'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
        <div>
          <Tabs>
            <TabList className='py-6 md:flex'>
              <Tab className='bg-orange-300 rounded border p-2 m-2'>Cavity Protection </Tab>
              <Tab className='bg-orange-300 rounded border p-2 m-2'>Cavity Protection </Tab>
              <Tab className='bg-orange-300 rounded border p-2 m-2'>Cavity Protection </Tab>

            </TabList>

            <TabPanel>
              <img className='py-4' src="https://i.ibb.co/SfsPwmj/teeth-x.png" alt="" />
              <h2 className='text-3xl py-4 font-bold'>Electro  Gastrology Therapy</h2>
              <p className='text-left'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <p className='py-4 text-left'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <button className='btn btn-secondary'>More Details</button>
            </TabPanel>
            <TabPanel>
              <img className='py-4' src="../../../../doc-house Assets/teeth-x.png" alt="" />
              <h2 className='text-4xl py-4'>Electro  Gastrology Therapy</h2>
              <p className='text-left'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> <br />
              <p className='py-4 text-left'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
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