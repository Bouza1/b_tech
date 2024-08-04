import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';

const RepairInstructions = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        'Slide 1 Content',
        'Slide 2 Content',
        'Slide 3 Content',
        // Add more slides as needed
    ];

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full h-full overflow-hidden">
            <div className="flex flex-row h-full w-full rounded-2xl object-cover bg-hero">
                <ChevronLeftIcon
                    onClick={prevSlide}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white size-14 z-10"
                >
                    Prev
                </ChevronLeftIcon>
                <div
                    className="flex transition-transform duration-500 w-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="flex min-w-full items-center justify-center"
                        >
                            {slide}
                        </div>
                    ))}
                </div>
                <ChevronRightIcon
                    onClick={nextSlide}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white size-14 z-10"/>
            </div>



        </div>
    );
};

export default RepairInstructions;