import React, { useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const PopUp = () => {


    useEffect(() => {
        const popupTimer = setTimeout(() => {
            setOpen(true); // Set the state to open the popup after a certain delay
        }, 3000); // Adjust the delay (in milliseconds) as needed

        return () => clearTimeout(popupTimer); // Clear the timer on component unmount
    }, []);

    const [isOpen, setOpen] = React.useState(false);

    return (
        <div className="">
            <Popup open={isOpen} closeOnDocumentClick onClose={() => setOpen(false)}>
                <div className="p-10 m-2  rounded-2xl max-w-24 h-60">
                    <div>
                        <p className='text-2xl  font-bold text-red-400'>When ever i get an idea i will try to execute in this website.
                            <br />
                            So it will be continues update website</p>

                    </div>
                </div>
            </Popup>

        </div>
    );







};

export default PopUp;