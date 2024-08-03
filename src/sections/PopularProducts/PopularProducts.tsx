import { motion } from 'framer-motion';
import { categories, specialOffers } from '../../constants';
import { ProductCard } from '../../components';

const PopularProducts = () => {
    return (
        <div className="flex flex-col justify-center gap-5">
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
                    <h2 className="text-8xl font-palanquin font-bold">
                        Popular <span className="text-blue-500"> Products</span>
                    </h2>
                </div>
            </motion.div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
                {specialOffers.map((product, index) => (
                    <ProductCard key={product.name} {...product} below1={(index <= 1)} />
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
                viewport={{ once: false }}>
                <div className="text-right">
                    <h2 className="text-8xl font-palanquin font-bold">
                        Shop <span className="text-blue-500"> More</span>
                    </h2>
                </div>
            </motion.div>

            <motion.div
                className={'mt-7 grid lg:grid-cols-4 text-white md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'}
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
                    <div className="rounded-lg bg-blue-500 text-2xl py-4 font-palanquin hover:wiggle font-bold cursor-pointer">
                        {category.name}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default PopularProducts;
