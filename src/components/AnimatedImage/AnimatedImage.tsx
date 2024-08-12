import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../firebase.ts';
import { Phone } from '../../pages/landingPage/sections/Home/WelcomeBanner.tsx';

const AnimatedImage = ({ bigImg, name, bannerStats }: Phone) => {
    const [key, setKey] = useState(0);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImage = async () => {
            setLoading(true);
            try {
                const imageRef = ref(storage, `phones/${bigImg}`);
                const url = await getDownloadURL(imageRef);
                setImageUrl(url);
            } catch (error) {
                console.error('Error fetching image:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchImage();
    }, [bigImg]);

    useEffect(() => {
        setKey((prevKey) => prevKey + 1);
    }, [imageUrl]);

    if (loading) {
        return <div></div>;
    }

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
            <p className="font-palanquin text-3xl sm:text-4xl text-gray-900 font-bold text-center">
                {name.substring(0, name.length - 2)}
                <span className="text-xl">{name.substring(name.length - 2, name.length)}</span>
            </p>
            <div className=" w-[450px] h-[400px] md:w-[720px] md:h-[540px] flex justify-center items-center">
                <motion.img
                    src={imageUrl as string}
                    alt={name}
                    className="object-contain w-full h-full p-2"
                />
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
