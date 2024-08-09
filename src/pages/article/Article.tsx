import { useParams } from 'react-router-dom';
import { NavBar, Section } from '../../components';
import { newsArticle, NewsArticles } from '../../constants';



const Article = () => {

    const returnArticle = () => {
        return articleId && NewsArticles.filter(article => articleId === String(article.id))[0]
    }

    const { articleId } = useParams();
    const article: '' | newsArticle | undefined = returnArticle()

    return(
        <>
            <NavBar showHighlight={false}/>
            <Section id={'article'}>
                <div className="p-5 mx-auto sm:p-10 md:p-16 bg-hero dark:text-gray-800">
                    <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                        <img src={article && article.imgUrl} alt=""
                             className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                        <div
                            className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                            <div className="space-y-2">
                                <a rel="noopener noreferrer" href="#"
                                   className="inline-block text-2xl font-semibold sm:text-3xl">{article && article.title}</a>
                                <p className="text-xs dark:text-gray-600">By
                                    <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">
                                        {article && article.author}
                                    </a>
                                </p>
                            </div>
                            <div className="dark:text-gray-800">
                                {article && article.content.map((paragraph) => (
                                    <p className="mt-2">{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Article