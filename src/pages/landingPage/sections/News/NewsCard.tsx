import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useNavigate } from 'react-router-dom';
import { NewsArticle } from '../../../../interfaces';

interface Props {
    article: NewsArticle;
}

const NewsCard = ({ article }: Props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const navigate = useNavigate();

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        console.log(article.id);
        navigate(`/article/${article.id}`);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            {/* Front Side of the Card */}
            <div
                className="max-w-sm bg-gray-300 mx-auto group hover:no-underline focus:no-underline hidden sm:block shadow-2xl rounded-lg p-1 min-h-[22rem] max-h-[22rem] cursor-pointer"
                onClick={handleFlip}
            >
                <img
                    role="presentation"
                    className="object-cover w-full rounded h-36"
                    src={article.imgUrl}
                    alt={article.altText}
                />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                        {article.title}
                    </h3>
                    <span className="text-xs dark:text-gray-600">January 26, 2021</span>
                </div>
            </div>

            {/* Back Side of the Card */}
            <div
                className="max-w-sm mx-auto group hover:no-underline overflow-hidden pb-1 focus:no-underline hidden sm:block bg-white shadow-2xl rounded-lg p-1 min-h-[22rem] max-h-[22rem]"
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
