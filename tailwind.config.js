/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontSize: {
            xs: ['12px', '16px'],
            sm: ['14px', '20px'],
            base: ['16px', '19.5px'],
            lg: ['18px', '21.94px'],
            xl: ['20px', '24.38px'],
            '2xl': ['24px', '29.26px'],
            '3xl': ['28px', '50px'],
            '4xl': ['48px', '58px'],
            '8xl': ['96px', '106px'],
        },
        extend: {
            perspective: {
                700: '700px',
            },
            transformOrigin: {
                'center-center': 'center center',
            },
            fontFamily: {
                palanquin: ['Palanquin', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            colors: {
                primary: '#ECEEFF',
                'coral-red': '#FF6452',
                'slate-gray': '#6D6D6D',
                'pale-blue': '#F5F6FF',
                'white-400': 'rgba(255, 255, 255, 0.80)',
            },
            boxShadow: {
                '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
            },
            backgroundImage: {
                hero: "url('assets/images/logos_graphics/collection-background.svg')",
                card: "url('assets/images/logos_graphics/thumbnail-background.svg')",
                triangle_purple: "url('assets/images/logos_graphics/triangle_purple.svg')",
                brokenCompBanner: "url('assets/images/logos_graphics/repair_comp_banner.svg')",
                brokenPhoneBanner: "url('assets/images/logos_graphics/repair_phone_banner.svg')",
                blueDiv: "url('assets/images/logos_graphics/blue_banner.svg')",
                computerCategory: "url('assets/images/logos_graphics/computer_category.jpg')",
                hardwareCategory: "url('assets/images/logos_graphics/hardware_category.jpg')",
                mobileCategory: "url('assets/images/logos_graphics/mobile_category.png')",
            },
            screens: {
                wide: '1440px',
            },
        },
    },
    plugins: [],
};
