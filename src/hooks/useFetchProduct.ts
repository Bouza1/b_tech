import { useState, useEffect } from 'react';
import { ref, get } from 'firebase/database';
import { database } from '../firebase';
import { Phone } from '../interfaces';


export const useFetchProduct = (table: string , productID : string) => {
    const [product, setProduct] = useState<Phone | []>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const dbRef = ref(database, `/products/${table}/${productID}`);

        const fetchData = async () => {
            try {
                const snapshot = await get(dbRef);
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    setProduct(data);
                } else {
                    console.log('No data available');
                }
            } catch (error) {
                console.error('Error fetching data: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { product, loading };
};
