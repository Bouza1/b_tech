import { motion } from 'framer-motion';
import { newsArticle } from '../../constants';

interface Props {
    article: newsArticle;
    below1: boolean;
}

const NewsCard = ({ article, below1 } : Props) => {
    return (
        <motion.div
            className="flex flex-col w-full h-full max-sm:w-full shadow-2xl rounded-xl hover:shadow-xl cursor-pointer duration-200 bg-gray-800 max-h-[22rem] overflow-hidden border-2 border-blue-500"
            initial={{
                opacity: 0,
                x: below1 ? -100 : 100,
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
            <img
                className="rounded-tl-lg rounded-tr-lg max-h-36"
                src={article.imgUrl}
                alt={article.altText}
            />

            <div className="flex p-2 w-full h-full flex-col overflow-hidden">

                <div className="flex flex-col flex-1 overflow-hidden">
                    <h3 className="text-md font-montserrat font-semibold text-white text-left">{article.title}</h3>
                    <div className="flex h-full overflow-hidden">
                        <p className="text-sm text-white text-left mt-1 border-t-2 border-t-blue-500 overflow-hidden text-ellipsis">{article.content[0]}</p>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}

export default NewsCard;
