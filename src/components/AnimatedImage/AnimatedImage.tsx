import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
    src: string;
    alt: string;
    title?: string;
    bannerStats?: string[];
}

const AnimatedImage = ({ src, alt, title, bannerStats }: Props) => {
    const [key, setKey] = useState(0);

    useEffect(() => {
        setKey((prevKey) => prevKey + 1);
    }, [src]);

    return (
        <motion.div
            key={key}
            className="flex flex-col items-center"
            initial={{
                opacity: 0.8,
                x: 0,
                y: 0,
            }}
            animate={{
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                    type: 'tween',
                    duration: 0.4,
                },
            }}
            viewport={{ once: false }}
        >
            <p className="font-palanquin text-3xl sm:text-4xl text-gray-600 font-bold text-center">
                {title?.substring(0, title?.length - 2)}
                <span className="text-xl">
                    {title?.substring(title?.length - 2, title?.length)}
                </span>
            </p>
            <div className=" w-[450px] h-[400px] md:w-[720px] md:h-[540px] flex justify-center items-center">
                <motion.img src={src} alt={alt} className="object-contain w-full h-full p-2" />
            </div>
            <motion.div
                className="flex flex-row gap-1 md:w-full justify-evenly"
                initial={{
                    opacity: 0.4,
                    x: 0,
                    y: 0,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        type: 'tween',
                        duration: 0.8,
                    },
                }}
                viewport={{ once: false }}
            >
                {bannerStats?.map((item, index) => (
                    <div className="rounded-md bg-blue-500 px-4 py-2 sm:text-md md:text-lg font-monserrat text-white">
                        <p key={index}>{item}</p>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default AnimatedImage;
