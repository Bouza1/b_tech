import { createElement, ElementType, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import { ComputerDesktopIcon, PhoneIcon, UserIcon, WrenchIcon } from '@heroicons/react/16/solid';
type instruction = {
    title: string;
    icon?: ElementType;
    text: string;
};

const RepairInstructions = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const icons = [UserIcon, ComputerDesktopIcon, WrenchIcon, PhoneIcon];

    const instructions: instruction[] = [
        {
            title: 'Repairs Guide',
            text: "This simple guide will help you get your machine booked in for repair and ensure it's back to proper functionality in no time.",
        },
        {
            title: '',
            icon: UserIcon,
            text: 'Please provide your personal details so we can accurately identify and assist you with your specific needs.',
        },
        {
            title: '',
            icon: ComputerDesktopIcon,
            text: 'Share the details of your device to ensure we have all the necessary information to diagnose and address any issues.',
        },
        {
            title: '',
            icon: WrenchIcon,
            text: 'Describe the issues or problems you are experiencing in as much detail as possible.',
        },
        {
            title: '',
            icon: PhoneIcon,
            text: 'Let us know your contact preferences so we can reach out to you in the most convenient way.',
        },
    ];

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? instructions.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === instructions.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full h-full overflow-hidden">
            <div className="flex flex-row h-full w-full rounded-2xl bg-cover bg-hero">
                <ChevronLeftIcon
                    onClick={prevSlide}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 text-gray-800 size-14 z-10"
                >
                    Prev
                </ChevronLeftIcon>
                <div
                    className="flex transition-transform duration-500 w-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {instructions.map((instruction, index) => (
                        <div className="flex min-w-full items-center justify-center p-2">
                            <div className="bg-white/20 flex justify-center w-full h-full rounded-2xl p-1">
                                {index === 0 ? (
                                    <div className="flex flex-col w-full h-full justify-evenly items-center">
                                        <div>
                                            <p className="font-palanquin font-bold text-8xl">
                                                {instruction.title.split(' ')[0]}{' '}
                                                <span className="text-blue-500">
                                                    {instruction.title.split(' ')[1]}
                                                </span>{' '}
                                            </p>
                                        </div>
                                        <p className="font-montserrat text-slate-gray text-2xl text-center leading-8 ">
                                            {instruction.text}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="flex flex-col w-full h-full justify-between items-center">
                                        <div className="flex w-full justify-evenly">
                                            {instruction.icon &&
                                                icons.map((icon) => (
                                                    <div
                                                        className={`rounded-full border-4 border-gray-800 p-2 ${instruction.icon === icon && 'bg-blue-500'}`}
                                                    >
                                                        {createElement(icon, {
                                                            className: `size-12  ${instruction.icon === icon ? 'text-white' : 'text-gray-800'}`,
                                                        })}
                                                    </div>
                                                ))}
                                        </div>
                                        {instruction.icon && (
                                            <div className="rounded-full border-8 border-gray-800 p-4">
                                                {createElement(instruction.icon, {
                                                    className: `size-36 text-gray-800`,
                                                })}
                                            </div>
                                        )}

                                        <p className="font-montserrat text-slate-gray text-2xl text-center leading-8 ">
                                            {instruction.text}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <ChevronRightIcon
                    onClick={nextSlide}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 text-gray-800 size-14 z-10"
                />
            </div>
        </div>
    );
};

export default RepairInstructions;
