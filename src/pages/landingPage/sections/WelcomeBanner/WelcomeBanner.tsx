import { useEffect, useState } from 'react';
import { statistics } from '../../../../constants';
import { arrowRight } from '../../../../assets/icons';
import { BigButton, AnimatedImage, PhoneDealCard } from '../../../../components';
import { get, ref } from 'firebase/database';
import { database } from '../../../../firebase.ts';
import { Phone } from '../../../../interfaces';


const WelcomeBanner = () => {
    const [phoneSelected, setPhoneSelected] = useState<Phone | null>(null);
    const [phones, setPhones] = useState<Phone[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dbRef = ref(database, '/products/phones');
                const snapshot = await get(dbRef);
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    setPhones(data);
                    setPhoneSelected(data[0])
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

    useEffect(() => {
        if (phones.length > 0) {
            setPhoneSelected(phones[0]);
        }
    }, [phones]);

    useEffect(() => {
        phoneSelected && console.log(phoneSelected.imgUrl)
    }, [phoneSelected]);

    useEffect(() => {
        console.log(phones);
    }, [phones]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex xl:flex-row flex-col justify-center text-left">
            <div className="xl:w-2/5 flex flex-col justify-center items-start md:w-full">
                <h1 className="mt-6 font-palanquin text-4xl lg:text-8xl text-gray-900 z-30 font-bold">
                    New Arrivals
                    <br />
                    <span className="text-blue-500 inline-block mt-3">Refurbished Phones</span>
                </h1>
                <div className="hidden lg:flex w-full">
                    <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 sm:max-w-sm">
                        Discover powerful refurbished phones, blending cutting-edge technology and
                        sleek design for your productivity and creativity.
                    </p>
                </div>
                <div className="w-full mt-8 mb-8 hidden md:flex">
                    <BigButton label="Shop Now" iconURL={arrowRight} />
                </div>

                <div className="hidden xl:flex justify-start items-start flex-wrap w-full mt-4 gap-16">
                    {statistics.map((stat, index) => (
                        <div key={index}>
                            <p className="text-4xl font-palanquin text-gray-900 font-bold">
                                {stat.value}
                            </p>
                            <p className="leading-7 font-montserrat text-slate-gray">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex-1 flex-col flex w-full items-center min-h-[800px] max-h-[1200px] lg:min-h-svh lg:max-h-svh bg-hero">
                <div className="flex flex-col mt-20 w-full">
                    {phoneSelected && (
                        <AnimatedImage
                            imgUrl={phoneSelected.imgUrl}
                            name={phoneSelected.name}
                            bannerStats={phoneSelected.bannerStats}
                            key={phoneSelected.name}
                            id={phoneSelected.id}
                            price={phoneSelected.price}/>
                    )}
                </div>

                <div className="flex gap-4 md:gap-6 absolute bottom-[5%] justify-between max-sm:px-6">
                    {phones.map((phone, index) => (
                        <div key={index}>
                            <PhoneDealCard
                                phone={phone}
                                setPhoneSelected={setPhoneSelected}
                                phoneSelected={phoneSelected ? phoneSelected : null}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WelcomeBanner;
