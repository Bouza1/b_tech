import {motion} from "framer-motion";
import { SmallButton } from '../index';


interface ProductCardProps {
    imgURL:string;
    name: string;
    newPrice: string;
    oldPrice: string;
    savings:string;
    tags: string[]
}

const ProductCard = ({imgURL, name, newPrice, oldPrice, savings, tags}: ProductCardProps) => {
    return (
        < motion.div
            className="flex flex-1 flex-col w-full max-sm:w-full shadow-3xl rounded-xl p-2 border-2 hover:shadow-xl cursor-pointer duration-200"
            initial={{
                opacity: 0,
                x: 20,
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

            <img className="object-cover rounded-tl-lg rounded-tr-lg bg-gray-200 p-2 "
                 src={imgURL}
                 alt={name}/>

            <div className="flex flex-1 flex-col mt-2 gap-2 justify-between">
                <h3 className="text-lg font-sans">{name}</h3>
                <div className="flex flex-wrap gap-1.5">
                    {tags.map(tag => (
                        <span className="px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500">
                                {tag}
                            </span>
                    ))}

                </div>
                <p className="space-x-2 text-left">
                    <span className="text-2xl font-semibold">{newPrice}</span>
                    <span className="text-sm line-through text-gray-500">{oldPrice}</span>
                    <span className="text-sm text-red-700">{savings}</span>
                </p>
                <div className="flex justify-between items-center pt-3 pb-2">

                    <SmallButton label={"Add To Cart"}/>

                    <p title="Add to Favorites"
                       className="text-3xl text-gray-300 hover:text-red-500 duration-300">&hearts;</p>
                </div>
            </div>

        </motion.div>
    )
}

export default ProductCard