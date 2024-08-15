import { useParams } from 'react-router-dom';
import { NavBar, Section } from '../../components';
import { useEffect, useState } from 'react';
import { get, ref } from 'firebase/database';
import { database } from '../../firebase.ts';
import { NewsArticle } from '../../interfaces';

const ArticlePage = () => {
    const { articleId } = useParams();
    const [article, setArticle] = useState<NewsArticle | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const dbRef = ref(database, `/news/${Number(articleId)}`);

        const fetchData = async () => {
            try {
                const snapshot = await get(dbRef);
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    setArticle(data);
                } else {
                    console.log('No data available');
                }
            } catch (error) {
                console.error('Error fetching data: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData().then(() => console.log(article));
    }, []);

    return (
        <>
            <NavBar showHighlight={false} />
            {loading ? (
                <div>Loading.....</div>
            ) : (
                <Section id={'article'}>
                    <div className="p-5 mx-auto sm:p-10 md:p-16 bg-hero dark:text-gray-800">
                        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                            <img
                                src={article ? article.imgUrl : ""}
                                alt={article ? article.altText : 'Alt text'}
                                className="w-full h-60 sm:h-96 dark:bg-gray-500"
                            />
                            <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                                <div className="space-y-2">
                                    <a
                                        rel="noopener noreferrer"
                                        href="#"
                                        className="inline-block text-2xl font-semibold sm:text-3xl"
                                    >
                                        {article && article.title}
                                    </a>
                                    <p className="text-xs dark:text-gray-600">
                                        By
                                        <a
                                            rel="noopener noreferrer"
                                            href="#"
                                            className="text-xs hover:underline"
                                        >
                                            {article && article.author}
                                        </a>
                                    </p>
                                </div>
                                <div className="dark:text-gray-800">
                                    {article &&
                                        article.content.map((paragraph) => (
                                            <p className="mt-2">{paragraph}</p>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            )}
        </>
    );
};

export default ArticlePage;
