import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

const SendButton = () => {
    const [animate, setAnimate] = useState(false);
    const animateButton = () => {
        setAnimate(true);
        // TODO("setAnimate back to false on completion")
        setTimeout(() => setAnimate(false), 2000);
    };
    return (
        <div className="wrapper">

            <button
                type="button"
                className={animate ? 'is_active' : 'font-montserrat border-3 border-gray-800 rounded-lg'}
                onClick={() => animateButton()}
            >
                <span>Submit</span>
                <div className="success bg-blue-400 rounded-full flex justify-center items-center text-white">
                    <PaperAirplaneIcon className="size-14 text-white"/>

                </div>
            </button>
        </div>
    );
};

export default SendButton;
