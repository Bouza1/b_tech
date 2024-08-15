import { Footer, NavBar } from '../../components';
import { useFetchNewsArticles } from '../../hooks/useFetchNewsArticles.ts';
import { NewsArticle } from '../../interfaces';

const NewsPage = () => {
    const { newsArticles, loading } = useFetchNewsArticles();

    if (loading) {
        return <div>Loading...</div>; // Display a loading message or spinner
    }

    return (
        <>
            <NavBar  showHighlight={true}/>
            <section className="dark:text-gray-800 mt-20">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 bg-hero bg-cover">
                    <a rel="noopener noreferrer" href="#"
                       className="block max-w-sm gap-3 mx-auto sm:max-w-full p-2 group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                        <img src={newsArticles[newsArticles.length - 1].imgUrl} alt=""
                             className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                                {newsArticles[newsArticles.length - 1].title}
                            </h3>
                            <span className="text-xs dark:text-gray-600">{newsArticles[newsArticles.length - 1].date}</span>
                            <p>
                                {newsArticles[newsArticles.length - 1].content[0].substring(0, 150) + "...."}
                            </p>
                        </div>
                    </a>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {newsArticles.map((article:NewsArticle) => (
                            <a rel="noopener noreferrer" href="#"
                               className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50" key={`article_${article.id}`}>
                                <img
                                    role="presentation"
                                    className="object-cover w-full rounded h-44 dark:bg-gray-500"
                                    src={article.imgUrl}
                                    alt={article.altText}
                                />
                                <div className="p-6 space-y-2">
                                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{article.title}</h3>
                                    <span className="text-xs dark:text-gray-600">{article.date}</span>
                                    <p>{newsArticles[newsArticles.length - 1].content[0].substring(0, 150) + "...."}</p>
                                </div>
                            </a>
                        ))}

                    </div>
                    <div className="flex justify-center">
                        <button type="button"
                                className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load
                            more posts...
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default NewsPage