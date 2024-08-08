import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { newsArticle } from '../../constants';

interface Props {
    article: newsArticle;
}

const NewsCard = ({ article }: Props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        console.log(article.id);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            {/* Front Side of the Card */}
            <div
                className="flex gap-2 flex-col w-full h-full max-sm:w-full shadow-2xl rounded-xl hover:shadow-xl cursor-pointer p-2 duration-200 bg-hero bg-cover min-h-[16rem] max-h-[16rem]"
                onClick={handleFlip}
            >
                <img
                    className="rounded-tl-lg rounded-tr-lg max-h-36"
                    src={article.imgUrl}
                    alt={article.altText}
                />

                <div className="flex pl-1 pr-1 pt-1 w-full h-full flex-col overflow-hidden border-t-2 border-t-gray-900">
                    <div className="flex flex-col flex-1 overflow-hidden">
                        <h3 className="text-md font-palanquin font-semibold text-left text-gray-900">
                            {article.title}
                        </h3>
                    </div>
                </div>
            </div>

            {/* Back Side of the Card */}
            <div
                className="flex flex-col w-full h-full max-sm:w-full shadow-2xl rounded-xl hover:shadow-xl cursor-pointer duration-200 bg-hero min-h-[16rem] max-h-[16rem]"
                onClick={handleFlip}
            >
                <div className="flex p-2 w-full h-full flex-col">
                    <div className="flex flex-1 flex-col overflow-hidden">
                        <div className="flex w-full h-full overflow-hidden rounded-lg pl-2 pr-2 pb-1 pt-1">
                            <p className="text-sm text-left overflow-hidden text-ellipsis text-gray-900">
                                {article.content[0]}
                            </p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <button
                            onClick={handleButtonClick}
                            className="text-md font-montserrat font-semibold border-2 rounded-lg hover:border-blue-500 hover:text-blue-500 px-3 py-1 text-gray-900 border-gray-900"
                        >
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </ReactCardFlip>
    );
};

export default NewsCard;
