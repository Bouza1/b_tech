import { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ShoppingCartIcon } from '@heroicons/react/16/solid';
import { Link as ScrollLink } from 'react-scroll';
import { logoHQ } from '../assets/images';

type NavLink = {
    name: string;
    href: string;
    current: boolean;
};

const navLinks: NavLink[] = [
    { name: 'Home', href: 'home', current: true },
    { name: 'Latest Deals', href: 'products', current: false },
    { name: 'About Us', href: 'about-us', current: false },
    { name: 'Repairs', href: 'repairs', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const NavBar = () => {
    const [current, setCurrent] = useState<string>('Home');

    const handleClick = (name: string) => {
        setCurrent(name);
    };

    return (
        <Disclosure as="nav" className="bg-white w-full fixed top-0 z-40">
            <div className="mx-auto max-full px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-20 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon
                                aria-hidden="true"
                                className="block h-6 w-6 group-data-[open]:hidden"
                            />
                            <XMarkIcon
                                aria-hidden="true"
                                className="hidden h-6 w-6 group-data-[open]:block"
                            />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <a href="/">
                                <img src={logoHQ} alt="Logo" width={200} height={80} />
                            </a>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navLinks.map((item: NavLink) => (
                                    <ScrollLink
                                        key={item.name}
                                        to={item.href}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-70}
                                        className={classNames(
                                            current === item.name
                                                ? 'border-b-4 border-b-blue-600 text-blue-600'
                                                : 'border-b-2 border-transparent hover:border-b-blue-600',
                                            'px-3 py-2 font-semibold cursor-pointer',
                                        )}
                                        onClick={() => handleClick(item.name)}
                                    >
                                        {item.name}
                                    </ScrollLink>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            type="button"
                            className="relative p-2 rounded-full bg-blue-600 text-white hover:text-white focus:outline-none"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <ShoppingCartIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navLinks.map((item: NavLink) => (
                        <ScrollLink
                            key={item.name}
                            to={item.href}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-70}
                            className={classNames(
                                current === item.name
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-300 hover:bg-blue-600 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium cursor-pointer',
                            )}
                            onClick={() => handleClick(item.name)}
                        >
                            {item.name}
                        </ScrollLink>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
};

export default NavBar;