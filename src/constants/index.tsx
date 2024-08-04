import { paint, support, repair } from '../assets/icons';
import {
    phoneSamsungS22,
    phonePixel8,
    phoneIPhone14,
    phoneIPhoneXR,
} from '../assets/images/phones';
import { gCardGigaByte8GB, ramDominatorPlatinumRGB } from '../assets/images/computer_accessories';

import { NavLink } from '../components/Misc/NavBar.tsx';
import { desktop1 } from '../assets/images/computers';
import { Staff } from '../sections/AboutUs/TeamProfileCard.tsx';
import { daveHeadshot, joshHeadshot } from '../assets/images/headshots';

export const navLinks: NavLink[] = [
    { name: 'Home', href: 'home', current: true },
    { name: 'Shop', href: 'products', current: false },
    { name: 'About Us', href: 'about-us', current: false },
    { name: 'Repairs', href: 'repairs', current: false },
    { name: 'News', href: 'news', current: false },
];

export const phoneDeals = [
    {
        thumbnail: phoneSamsungS22,
        bigPhone: phoneSamsungS22,
        title: 'Samsung S22 - 128GB',
        bannerStats: ['1y Warranty', 'Free Sim', 'Factory Reset', 'Unlocked'],
    },
    {
        thumbnail: phoneIPhoneXR,
        bigPhone: phoneIPhoneXR,
        title: 'IPhone XR - 128GB',
        bannerStats: ['Free Sim', 'Factory Reset', 'Unlocked'],
    },
    {
        thumbnail: phoneIPhone14,
        bigPhone: phoneIPhone14,
        title: 'IPhone 14 - 256GB',
        bannerStats: ['Free Sim', 'Factory Reset', 'New Battery'],
    },
];

export const statistics = [
    { value: '1y', label: 'Warranty' },
    { value: '1k+', label: 'Customers' },
    { value: '20y', label: 'Established' },
];

export const specialOffers = [
    {
        imgURL: gCardGigaByte8GB,
        name: 'GIGABYTE GeForce RTX 4070 Ti SUPER 16 GB',
        newPrice: '£849.00',
        oldPrice: '£1000.00',
        savings: '15%',
        tags: ['Free Shipping', '1 Year Warranty'],
    },
    {
        imgURL: ramDominatorPlatinumRGB,
        name: 'Corsair Dominator Platinum DDR5 16GB x 2',
        newPrice: '£99.95',
        oldPrice: '£140.00',
        savings: '40%',
        tags: ['1 Year Warranty'],
    },
    {
        imgURL: desktop1,
        name: 'AMD Ryzen 5, RTX 4060, 1 TB SSD',
        newPrice: '£1140.00',
        oldPrice: '£1400.00',
        savings: '20%',
        tags: ['Refurbished', '1 Year Warranty'],
    },
    {
        imgURL: phonePixel8,
        name: 'GOOGLE Pixel 8a - 128 GB',
        newPrice: '215.00',
        oldPrice: '245.00',
        savings: '10%',
        tags: ['Refurbished', '1 Year Warranty'],
    },
];

export const staff: Staff[] = [
    {
        name: 'David Bousfield',
        job: 'Lead Technician',
        linkedin: '#',
        email: 'email@email.com',
        photo: daveHeadshot,
    },
    {
        name: 'Joshua Bousfield',
        job: 'Software Engineer',
        linkedin: '#',
        email: 'email@email.com',
        photo: joshHeadshot,
    },
];

export const services = [
    {
        imgURL: repair,
        label: 'Repairs',
        subtext: 'Broken Screen? Virus? Lost Data?',
        smallText:
            'Our dedicated team of Microsoft Certified Professionals are here to get you back on track.',
        buttonText: 'Book Now',
        href: '/book_repair',
    },
    {
        imgURL: paint,
        label: 'Design',
        subtext: 'Need A Website or Application?',
        smallText: 'Let our in house software development take care of that.',
        buttonText: 'View Portfolio',
        href: '/portfolio',
    },
    {
        imgURL: support,
        label: 'Support',
        subtext: 'Have a Question?',
        smallText: 'Talk to one of our dedicated team members now.',
        buttonText: 'Chat Now',
        href: '/chat',
    },
];

type category = {
    name: string;
};

export const categories: category[] = [
    { name: 'Computers' },
    { name: 'Hardware' },
    { name: 'Mobile Phones' },
    { name: 'Accessories' },
];

export const STR_PROB_ISSUES =
    'Please give a brief description of the problems/issues you are facing and a member of the team will be in touch shortly.';
