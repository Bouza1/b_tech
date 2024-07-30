import { motion } from 'framer-motion';

const RefurbishedDevices = () => {
    return (
        <>
            <motion.div
                className="flex flex-1 flex-col"
                id="about-us"
                initial={{
                    opacity: 0,
                    x: -100,
                    y: 0,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        type: 'tween',
                        bounce: 0.4,
                        duration: 0.8,
                    },
                }}
                viewport={{ once: false }}
            >
                <h2 className="font-palanquin text-4xl md:text-8xl capitalize font-bold text-blue-500">
                    Refurbished <span className="text-black"> Device?</span>
                </h2>

                <p className="mt-4 lg:max-w-lg info-text">
                    Experience the perfect blend of performance and value with our expertly
                    refurbished computers. Each device undergoes rigorous testing and refurbishment
                    to ensure top-tier functionality and reliability. Plus, enjoy peace of mind with
                    our comprehensive parts warranty, guaranteeing unmatched quality and support.
                </p>
                <p className="mt-6 info-text lg:max-w-lg">
                    Our dedication to details ensures your satisfaction.
                </p>
            </motion.div>

            <motion.div
                className="flex-1 flex flex-col gap-5 justify-center items-center"
                initial={{
                    opacity: 0,
                    x: 100,
                    y: 0,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        type: 'tween',
                        bounce: 0.4,
                        duration: 0.8,
                    },
                }}
                viewport={{ once: false }}
            >
                <div className="flex flex-1 flex-col p-7 rounded-3xl shadow-2xl gap-3 bg-primary bg-hero bg-cover bg-center w-full">
                    <div className="flex flex-1 justify-center items-center">
                        <h2 className="font-palanquin text-8xl text-blue-500 capitalize font-bold">
                            472<span className="font-montserrat font-bold text-2xl">M</span>
                        </h2>
                    </div>
                    <h2 className="font-montserrat text-2xl md:text-4xl font-bold text-center">
                        {' '}
                        Devices are sent to landfill each year in the UK.
                    </h2>
                    <p className="info-text">
                        Here at B-Tech we breathe new life into devices destined for landfill,
                        saving not only the planet but you some money.
                    </p>
                </div>
            </motion.div>
        </>
    );
};

export default RefurbishedDevices;
