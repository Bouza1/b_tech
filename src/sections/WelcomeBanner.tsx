import { useState } from 'react';
import { phoneDeals, statistics } from '../constants';
import { phoneDeal1 } from '../assets/images';
import { arrowRight } from '../assets/icons';
import {BigButton, AnimatedImage, PhoneDealCard} from "../components";


const WelcomeBanner = () => {
    const [bigPhoneImg, setBigPhoneImg] = useState(phoneDeal1);
    return (
        <div className="flex xl:flex-row flex-col justify-center text-left">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x">
                <h1 className="mt-6 font-palanquin text-8xl font-bold">
                    New Arrivals
                    <br />
                    <span className="text-blue-500 inline-block mt-3">Dell Laptops</span>
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                    Discover powerful refurbished laptops, blending cutting-edge technology and
                    sleek design for your productivity and creativity.
                </p>

                <BigButton label="Shop now" iconURL={arrowRight} />

                <div className="flex justify-start items-start flex-wrap w-full mt-4 gap-16">
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

            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen bg-primary bg-hero bg-cover bg-center">
                <AnimatedImage src={bigPhoneImg} alt="shoe collection" width={610} height={502} />

                <div className="flex sm:gap-6 gap-4 absolute bottom-[5%] justify-between max-sm:px-6">
                    {phoneDeals.map((deal, index) => (
                        <div key={index}>
                            <PhoneDealCard
                                imgURL={deal}
                                changeBigPhoneImage={(deal) => setBigPhoneImg(deal)}
                                bigPhoneImg={bigPhoneImg}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WelcomeBanner;
