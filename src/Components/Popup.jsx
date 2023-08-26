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
        <div className="  rounded-xl">
            <Popup open={isOpen} closeOnDocumentClick onClose={() => setOpen(false)}>
                <div className="p-10 max-w-24 h-60">
                    <p className='text-3xl font-bold text-red-400'>When ever i get an idea i will try to execute in this website. <br />
                        So it will be continues update website</p>
                </div>
            </Popup>

        </div>
    );







};

export default PopUp;