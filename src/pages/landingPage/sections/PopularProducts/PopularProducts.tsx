import { motion } from 'framer-motion';
import { categories, specialOffers } from '../../../../constants';
import { ProductCard } from '../../../../components';

const PopularProducts = () => {
    return (
        <div className="flex flex-col justify-center">
            <motion.div
                className="flex flex-col"
                initial={{
                    opacity: 0,
                    x: 0,
                    y: -100,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        type: 'tween',
                        duration: 0.5,
                    },
                }}
                viewport={{ once: false }}
            >
                <div className="text-left">
                    <h2 className="text-8xl font-palanquin text-gray-900 font-bold">
                        Popular <span className="text-blue-500"> Products</span>
                    </h2>
                </div>
            </motion.div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 mt-10">
                {specialOffers.map((product, index) => (
                    <ProductCard id={`product_${index}`} key={`product_card_${index}`} {...product} below1={index <= 1} />
                ))}
            </div>
            <motion.div
                className="flex flex-1 flex-col w-full"
                initial={{
                    opacity: 0,
                    x: 70,
                    y: 0,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        type: 'tween',
                        duration: 0.5,
                    },
                }}
                viewport={{ once: false }}
            >
            </motion.div>

            <motion.div
                className={
                    'grid lg:grid-cols-4 text-white md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 mt-10 gap-8'
                }
                initial={{
                    opacity: 0,
                    x: 0,
                    y: 70,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        type: 'tween',
                        duration: 0.5,
                    },
                }}
                viewport={{ once: false }}
            >
                {categories.map((category) => (

                    <div
                        className={`rounded-lg flex justify-center items-center text-3xl py-4 h-40 font-palanquin text-white ${category.background} hover:bg-gray-900 hover:items-start hover:text-blue-500 bg-cover font-bold cursor-pointer`}
                        key={category.name}
                    >
                        {category.name}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default PopularProducts;
