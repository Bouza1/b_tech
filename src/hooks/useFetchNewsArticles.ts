import { useState, useEffect } from 'react';
import { ref, get } from 'firebase/database'; // adjust based on your setup
import { database } from '../firebase';
import { NewsArticle } from '../interfaces'; // adjust based on your setup

export const useFetchNewsArticles = () => {
    const [newsArticles, setNewsArticles] = useState<NewsArticle[] | []>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const dbRef = ref(database, '/news');

        const fetchData = async () => {
            try {
                const snapshot = await get(dbRef);
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    setNewsArticles(data);
                } else {
                    console.log('No data available');
                }
            } catch (error) {
                console.error('Error fetching data: ', error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchData();
    }, []);

    return { newsArticles, loading };
};
