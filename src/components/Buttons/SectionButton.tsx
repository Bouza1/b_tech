import { createElement, ElementType } from 'react';
import { motion } from 'framer-motion';

interface Props {
    isValid: boolean;
    isActive: boolean;
    IconValid: ElementType;
    IconInvalid: ElementType;
    onClick: () => void;
}

const SectionButton = ({ isValid, isActive, IconValid, IconInvalid, onClick }: Props) => {
    return (
        <div
            className={`p-2 rounded-full cursor-pointer ${isValid && !isActive && 'bg-green-400 border-4 border-gray-800'} ${isValid && isActive && 'bg-blue-500 border-4 border-gray-800'} ${isActive && !isValid && 'bg-blue-500 border-4 border-gray-800'} ${!isActive && !isValid && 'border-4 bg-hero border-gray-800'}`}
            onClick={onClick}
        >
            <motion.div animate={isValid ? { rotate: 360 } : {}} transition={{ duration: 0.5 }}>
                {createElement(isValid ? IconValid : IconInvalid, {
                    className: `size-14 ${isActive && 'text-white'} ${!isActive && 'text-gray-800'}`,
                })}
            </motion.div>
        </div>
    );
};

export default SectionButton;
