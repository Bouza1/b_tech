import { NewsArticles } from '../../constants';
import NewsCard from './NewsCard.tsx';


const News = () => {

    return (
        <div className="flex flex-col justify-center gap-3">
            <div className="flex w-full h-full flex-row items-center justify-between">
                <h2 className="text-8xl text-left font-palanquin font-bold">
                    Latest <span className="text-blue-500"> News</span>
                </h2>
                <div className="flex flex-row items-end justify-end bg-red-500">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div
                    className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 max-h-[44rem] min-h-[44rem]">
                    {NewsArticles.map((article, index) => (
                        <NewsCard article={article} below1={index <= 3}/>
                    ))}
                </div>

            </div>
        </div>

    )
}

export default News