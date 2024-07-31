import { facebook, instagram, paint, support, repair, twitter } from '../assets/icons';
import {
    customer1,
    customer2,
    gCard1,
    ram1,
    phone1,
    desktop1, s22, iPhoneXR, iPhone14,
} from '../assets/images';
import { NavLink } from '../components/NavBar.tsx';

export const navLinks: NavLink[] = [
    { name: 'Home', href: 'home', current: true },
    { name: 'Shop', href: 'products', current: false },
    { name: 'About Us', href: 'about-us', current: false },
    { name: 'Repairs', href: 'repairs', current: false },
    {name: 'News', href: 'news', current: false },
];

export const phoneDeals = [
    {
        thumbnail: s22,
        bigPhone: s22,
        title:"Samsung S22 - 128GB",
        bannerStats:["1y Warranty", "Free Sim", "Factory Reset", "Unlocked"]
    },
    {
        thumbnail: iPhoneXR,
        bigPhone: iPhoneXR,
        title:"IPhone XR - 128GB",
        bannerStats:["Free Sim", "Factory Reset", "Unlocked"]
    },
    {
        thumbnail: iPhone14,
        bigPhone: iPhone14,
        title:"IPhone 14 - 256GB",
        bannerStats:["Free Sim", "Factory Reset", "New Battery"]

    },
];

export const statistics = [
    { value: '1y', label: 'Warranty' },
    { value: '1k+', label: 'Customers' },
    { value: '20y', label: 'Established' },
];

export const specialOffers = [
    {
        imgURL: gCard1,
        name: 'GIGABYTE GeForce RTX 4070 Ti SUPER 16 GB',
        newPrice: '£849.00',
        oldPrice: '£1000.00',
        savings: '15%',
        tags: ['Free Shipping', '1 Year Warranty'],
    },
    {
        imgURL: ram1,
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
        imgURL: phone1,
        name: 'GOOGLE Pixel 8a - 128 GB',
        newPrice: '215.00',
        oldPrice: '245.00',
        savings: '10%',
        tags: ['Refurbished', '1 Year Warranty'],
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

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback:
            'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!',
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback:
            "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
    },
];

export const footerLinks = [
    {
        title: 'Products',
        links: [
            { name: 'Air Force 1', link: '/' },
            { name: 'Air Max 1', link: '/' },
            { name: 'Air Jordan 1', link: '/' },
            { name: 'Air Force 2', link: '/' },
            { name: 'Nike Waffle Racer', link: '/' },
            { name: 'Nike Cortez', link: '/' },
        ],
    },
    {
        title: 'Help',
        links: [
            { name: 'About us', link: '/' },
            { name: 'FAQs', link: '/' },
            { name: 'How it works', link: '/' },
            { name: 'Privacy policy', link: '/' },
            { name: 'Payment policy', link: '/' },
        ],
    },
    {
        title: 'Get in touch',
        links: [
            { name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
            { name: '+92554862354', link: 'tel:+92554862354' },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: 'facebook logo' },
    { src: twitter, alt: 'twitter logo' },
    { src: instagram, alt: 'instagram logo' },
];
