import {motion} from "framer-motion";
import {arrowRight} from "../assets/icons/index.js";
import BigButton from "../components/BigButton.jsx";
import { specialOffers } from '../constants';
import { ProductCard } from '../components';

const PopularProducts = () => {
    return(
        <div className="flex flex-col justify-center gap-5 pb-5">
            <motion.div
                className="flex flex-col gap-5"
                initial={{
                    opacity: 0,
                    x: 0,
                    y: 20
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        type: "tween",
                        duration: 0.8
                    }
                }}
                viewport={{once: false}}>
                <div className="text-left">
                    <h2 className="text-8xl font-palanquin font-bold">Popular <span className="text-blue-500"> Products</span></h2>
                    <p className="mt-2 font-montserrat text-slate-gray">Experience top-notch quality and
                        style with our sought-after selections. Discover a world of comfort, design and value.</p>
                </div>
            </motion.div>


            <div className="mt-7 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
                {specialOffers.map((product) => (
                    <ProductCard key={product.name} {...product}/>
                ))}
            </div>

            <div className="mt-9 flex justify-center items-center">
                <BigButton label="Shop More" iconURL={arrowRight}/>
            </div>

        </div>
    )
}

export default PopularProducts;