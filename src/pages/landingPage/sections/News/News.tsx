import { NewsArticles } from '../../../../constants';
import { NewsCard } from './index.tsx';
import { useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

const News = () => {
    const PAGE_SIZE = 3;
    const [currentPage, setCurrentPage] = useState(0);

    const handleNext = () => {
        if ((currentPage + 1) * PAGE_SIZE < NewsArticles.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleBack = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = currentPage * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;

    return (
        <div className="flex flex-col justify-center gap-6">
            <div className="flex w-full h-full flex-row items-center justify-between">
                <h2 className="text-8xl text-left font-palanquin font-bold text-gray-900">
                    Latest <span className="text-blue-500"> News</span>
                </h2>
            </div>
            <div className="flex flex-col w-full">
                <section className="flex flex-col">
                    <div className="container space-y-8">

                        <a href={`/article/${NewsArticles[7].id}`}
                           className="flex flex-row items-center shadow-2xl justify-center gap-3 group hover:no-underline focus:no-underline bg-hero rounded-lg px-8">
                            <div className="w-1/2 h-72 pr-3 pl-3 rounded">
                                <img src={NewsArticles[7].imgUrl} alt=""
                                     className="flex h-full py-2 rounded" />
                            </div>

                            <div className="p-4 space-y-2 w-1/2">
                                <h3 className="text-2xl font-palanquin sm:text-4xl group-hover:underline group-focus:underline">
                                    {NewsArticles[7].title}
                                </h3>
                                <span className="text-xs dark:text-gray-600">February 19, 2021</span>
                            </div>
                        </a>
                        <div className="flex flex-row w-full items-center">
                            <MdNavigateBefore size={64} onClick={handleBack} className="cursor-pointer hover:text-blue-500" />
                            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {NewsArticles.slice(startIndex, endIndex).map((article) => (
                                    <NewsCard article={article} key={article.id} />
                                ))}
                            </div>
                            <MdNavigateNext size={64} onClick={handleNext} className="cursor-pointer hover:text-blue-500" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default News;
