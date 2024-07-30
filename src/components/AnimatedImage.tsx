import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const AnimatedImage = ({ src, alt, width, height }: Props) => {
    const [key, setKey] = useState(0);

    useEffect(() => {
        setKey((prevKey) => prevKey + 1);
    }, [src]);

    return (
        <motion.img
            key={key} // Changing the key will re-mount the component and trigger the animation
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="object-contain relative z-10"
            initial={{
                opacity: 0,
                x: 0,
                y: 0,
            }}
            animate={{
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                    type: 'tween',
                    duration: 2,
                },
            }}
            viewport={{ once: false }}
        />
    );
};

export default AnimatedImage;
