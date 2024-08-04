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
            className={`p-2 rounded-full ${isValid || isActive ? 'bg-blue-500' : 'bg-gray-400'} ${isActive ? 'ring-3 border-4 border-gray-800' : 'ring-3 border-4 border-gray-300'}`}
            onClick={onClick}
        >
            <motion.div
                animate={isValid ? { rotate: 360 } : {}}
                transition={{ duration: 0.5 }}
            >
                {createElement(isValid ? IconValid : IconInvalid, { className: `size-14 ${isValid || isActive ? 'text-white' : 'text-gray-600'}` })}
            </motion.div>
        </div>
    );
};

export default SectionButton;