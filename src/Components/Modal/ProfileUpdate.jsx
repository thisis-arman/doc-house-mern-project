
import { useForm } from 'react-hook-form';
import Modal from './Modal';
// import { useState } from 'react';
import useUsers from '../../Hooks/useUsers';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';

export default function ProfileUpdate({ isOpen, setIsOpen }) {
    const { user } = useContext(AuthContext)


    const [users] = useUsers()
    const currentUser = users.find(u => u.email === user.email)
    console.log({ currentUser })


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const { name, email, consultFee, Chamber, expertise, phone, Bio, } = data;
        const profile = { name, email, expertise, consultFee: parseInt(consultFee), Chamber, phone, Bio, doctorID: currentUser.doctorID, drImage: currentUser.image, ratings: 4.7, numberOfReviews: 6, status: currentUser.status }
        console.log({ profile })
        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, body: JSON.stringify({ profile })
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId > 0) {
                    console.log(data)
                    toast.success('Profile updated successfully')
                }
            })

        console.log({ data })
        // onCancel();
    };


    const onCancel = () => {
        reset();
        setIsOpen(false);
    };



    return (
        <>
            <div>
                <Toaster />
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
                                placeholder='e.g -302 no room ,Epic Hospital, Chattrogram'


                                {...register('Chamber')}

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


                                defaultValue={currentUser?.email}
                                {...register('email')}
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
                                placeholder='Tell us something about yourself...'
                                {...register('Bio')}
                            />
                        </div>
                        {/*  <div className="flex flex-col mb-5">
                            <label htmlFor="title" className="mb-2">
                                Deadline
                            </label>
                            <input
                                className="w-full rounded-md p-1 text-black bg-slate-100"
                                type="date"
                                id="date"
                                {...register('date')}
                            />
                        </div> */}
                        <div className="flex flex-col mb-5">
                            <label htmlFor="fee" className="mb-2">
                                Consult Fee
                            </label>
                            <input
                                className="w-full rounded-md p-1 text-black bg-slate-100"
                                type="number"
                                id="fee"
                                placeholder='Consultation Fee'
                                {...register('consultFee')}
                            />
                        </div>
                        <div className="flex flex-col mb-5">
                            <label htmlFor="number" className="mb-2">
                                Phone Number
                            </label>
                            <input
                                className="w-full rounded-md p-1 text-black bg-slate-100"
                                type="number"
                                id="number"
                                placeholder='Phone Number'
                                {...register('phone')}
                            />
                        </div>

                        {/* <div className="flex flex-col mb-5">
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
                        </div> */}
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
