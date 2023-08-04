
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../../../src/react-tabs.css';

const OurServices = () => {
    return (
        <div className="container relative top-[600px] mb-[500px] w-full mx-auto grid grid-cols-2 px-5 py-24 md:flex-row flex-col items-center">
            <div className=" ">
                <img className='' src="../../../../doc-house Assets/grilwithNotes.png" alt="" />
            </div>
            <div className="">
                <div>
                    <h2 className="text-3xl font-semibold">Our Services</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                </div>
                <div>
                <Tabs>
    <TabList>
      <Tab>Cavity Protection </Tab>
      <Tab>Cavity Protection </Tab>
      <Tab>Cavity Protection </Tab>
      
    </TabList>

    <TabPanel>
      <img className='py-4' src="../../../../doc-house Assets/teeth-x.png" alt="" />
      <h2 className='text-4xl py-4'>Electro  Gastrology Therapy</h2>
      <p className=''>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> <br />
      <p className='py-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      <button className='btn btn-secondary'>More Details</button>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>

                </div>

            </div>
            
        </div>
    );
};

export default OurServices;