import { Phone } from '../../pages/landingPage/sections/Home/WelcomeBanner.tsx';
import { ref, getDownloadURL } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { storage } from '../../firebase.ts';

interface Props {
    phone: Phone;
    setPhoneSelected: (phone: Phone) => void;
    phoneSelected: Phone | null;
}

const PhoneDealCard = ({ phone, setPhoneSelected, phoneSelected }: Props) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const imageRef = ref(storage, `phones/${phone.bigImg}`);

                const url = await getDownloadURL(imageRef);
                setImageUrl(url);
            } catch (error) {
                console.error('Error fetching image:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchImage();
    }, []);

    useEffect(() => {
        console.log(imageUrl);
    }, [imageUrl]);

    const handleClick = () => {
        if (phoneSelected?.bigImg !== phone.bigImg) {
            setPhoneSelected(phone);
        }
    };

    if (loading) {
        return <div></div>;
    }

    return (
        <div
            className={`border-2 rounded-xl ${
                phoneSelected?.bigImg === phone.bigImg ? 'border-blue-500' : 'border-transparent'
            } cursor-pointer max-sm:flex-1`}
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img
                    src={imageUrl as string}
                    alt="phone collection"
                    width={127}
                    height={103.34}
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default PhoneDealCard;
