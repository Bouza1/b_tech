import { useState } from 'react';
import { phoneDeals, statistics } from '../../constants';
import { arrowRight } from '../../assets/icons';
import { BigButton, AnimatedImage, PhoneDealCard } from '../../components';

export interface Phone {
    thumbnail: string;
    bigPhone: string;
    title?: string;
    bannerStats?: string[];
}

const WelcomeBanner = () => {
    const [phoneSelected, setPhoneSelected] = useState<Phone>(phoneDeals[0]);

    return (
        <div className="flex xl:flex-row flex-col justify-center mt-10 ml-20 text-left">
            <div className="xl:w-2/5 flex flex-col justify-center items-start md:w-full">
                <h1 className="mt-6 font-palanquin text-4xl lg:text-8xl z-30 font-bold">
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
                            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                            <p className="leading-7 font-montserrat text-slate-gray">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex-1 flex-col flex w-full items-center min-h-[800px] max-h-[1200px] lg:min-h-svh lg:max-h-svh bg-hero">
                <div className="flex flex-col mt-20 w-full">
                    <AnimatedImage
                        src={phoneSelected?.bigPhone}
                        alt="phone collection"
                        title={phoneSelected.title}
                        bannerStats={phoneSelected.bannerStats}
                    />
                </div>

                <div className="flex gap-4 md:gap-6 absolute bottom-[5%] justify-between max-sm:px-6">
                    {phoneDeals.map((phone, index) => (
                        <div key={index}>
                            <PhoneDealCard
                                phone={phone}
                                setPhoneSelected={setPhoneSelected}
                                phoneSelected={phoneSelected}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WelcomeBanner;
