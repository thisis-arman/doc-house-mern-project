
import { useForm } from 'react-hook-form';
import Modal from './Modal';
// import { useState } from 'react';
import useUsers from '../../Hooks/useUsers';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

export default function ProfileUpdate({ isOpen, setIsOpen }) {
    const { user } = useContext(AuthContext)


    const [users] = useUsers()
    const currentUser = users.find(u => u.email === user.email)


    const { register, handleSubmit, reset } = useForm();


    const onCancel = () => {
        reset();
        setIsOpen(false);
    };

    const onSubmit = (data) => {

        console.log(data)
        onCancel();
    };

    return (
        <>
            <div>
                <Modal isOpen={isOpen} setIsOpen={setIsOpen} >

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col mb-5">
                            <label htmlFor="name" className="mb-2">
                                Name
                            </label>
                            <input
                                className="w-full border p-1 text-black bg-slate-100 rounded-md "
                                type="text"
                                id="name"


                                {...register('name')}
                                defaultValue={currentUser?.name}
                            />
                        </div>
                        <div className="flex flex-col mb-5">
                            <label htmlFor="name" className="mb-2">
                                Expertise
                            </label>
                            <input
                                className="w-full border p-1 text-black bg-slate-100 rounded-md "
                                type="text"
                                id="expertise"
                                placeholder='e.g -BDS, MDS - Endodontics'


                                {...register('expertise')}

                            />
                        </div>
                        <div className="flex flex-col mb-5">
                            <label htmlFor="name" className="mb-2">
                                Chamber
                            </label>
                            <input
                                className="w-full border p-1 text-black bg-slate-100 rounded-md "
                                type="text"
                                id="chamber"
                                placeholder='e.g -302 no room ,Epic Hospital, Chattogram'


                                {...register('chamber')}

                            />
                        </div>
                        <div className="flex flex-col mb-5">
                            <label htmlFor="email" className="mb-2">
                                Email
                            </label>
                            <input
                                className="w-full border p-1 text-black bg-slate-100 rounded-md "
                                type="email"
                                id="email"


                                {...register('email')}
                                defaultValue={currentUser?.email}
                            />
                        </div>
                        <div className="flex flex-col mb-5">
                            <label htmlFor="title" className="mb-2">
                                Bio
                            </label>
                            <textarea
                                className="w-full rounded-md p-1 text-black bg-slate-100"
                                type="text"
                                id="description"
                                {...register('description')}
                            />
                        </div>
                        <div className="flex flex-col mb-5">
                            <label htmlFor="title" className="mb-2">
                                Deadline
                            </label>
                            <input
                                className="w-full rounded-md p-1 text-black bg-slate-100"
                                type="date"
                                id="date"
                                {...register('date')}
                            />
                        </div>
                        <div className="flex flex-col mb-5">
                            <label htmlFor="title" className="mb-2">
                                Assign to
                            </label>
                            <select
                                className="w-full rounded-md p-1 text-black bg-slate-100"
                                id="assignedTo"
                                {...register('assignedTo')}
                            >
                                <option value="Mir Hussain">Mir Hussain</option>
                                <option value="Mezba Abedin">Mezba Abedin</option>
                                <option value="Nahid Hasan">Nahid Hasan</option>
                                <option value="Mizanur Rahman">Mizanur Rahman</option>
                                <option value="Tanmoy Parvez">Tanmoy Parvez</option>
                                <option value="Fahim Ahmed Firoz">Fahim Ahmed Firoz</option>
                                <option value="Rahatul Islam">Rahatul Islam</option>
                                <option value="Samin Israr Ravi">Samin Israr Ravi</option>
                                <option value="Mehedi Anik">Mehedi Anik</option>
                                <option value="Ehtisam Haq">Ehtisam Haq</option>
                                <option value="Anisur Rahman">Anisur Rahman</option>
                                <option value="Muktadir Hasan">Muktadir Hasan</option>
                                <option value="Masud Alam">Masud Alam</option>
                            </select>
                        </div>
                        <div className="flex flex-col mb-5">
                            <label htmlFor="title" className="mb-2">
                                Priority
                            </label>
                            <select
                                className="w-full rounded-md p-1 text-black bg-slate-100"
                                id="priority"
                                {...register('priority')}
                            >
                                <option defaultValue value="high">
                                    High
                                </option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                        <div className="flex gap-3 justify-end">
                            <button
                                onClick={() => onCancel()}
                                type="button"
                                className="btn btn-danger "
                            >
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-primary ">
                                submit
                            </button>
                        </div>
                    </form>



                </Modal>

            </div >
        </>
    )
}
