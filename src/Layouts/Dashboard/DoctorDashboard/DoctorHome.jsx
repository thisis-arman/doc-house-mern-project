import { SlCalender } from 'react-icons/sl'

const DoctorHome = () => {
    return (
        <section className='p-4'>
            <h2 className='text-2xl font-bold py-4'>Doctor Home</h2>
            <div className='flex w-full justify-center gap-4 rounded-md py-8'>
                <div className='flex p-4 rounded-md items-center border bg-pink-100 gap-2'>
                    <SlCalender />
                    <div className=''>
                        <h2 className="text-2xl font-bold">342</h2>
                        <p>Appointments</p>
                    </div>
                </div>
                <div className='flex items-center p-4 rounded-md border bg-pink-100 gap-2'>
                    <SlCalender />
                    <div>
                        <h2 className="text-2xl font-bold">342</h2>
                        <p>Appointments</p>
                    </div>
                </div>
                <div className='flex items-center p-4 rounded-md border bg-pink-100 gap-2'>
                    <SlCalender />
                    <div>
                        <h2 className="text-2xl font-bold">342</h2>
                        <p>Appointments</p>
                    </div>
                </div>
                <div className='flex items-center border p-4 rounded-md bg-pink-100 gap-2'>
                    <SlCalender />
                    <div>
                        <h2 className="text-2xl font-bold">342</h2>
                        <p>Appointments</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default DoctorHome;