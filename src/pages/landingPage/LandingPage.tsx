import { NavBar, Section } from '../../components';
import { WelcomeBanner } from './sections/WelcomeBanner';
import { PopularProducts } from './sections/PopularProducts';
import { AboutUs } from './sections/AboutUs';
import { Repairs } from './sections/Repairs';
import NewsLandingStrip from './sections/News/NewsLandingStrip.tsx';
import { Footer } from '../../components/Misc';

const LandingPage = () => {
    return (
        <>
            <NavBar showHighlight={true} />
            <main>
                <Section id={'home_section'}>
                    <WelcomeBanner key={'welcome_banner'} />
                </Section>
                <Section id={'products_section'}>
                    <PopularProducts key={'products'} />
                </Section>
                <Section id={'about_us_section'}>
                    <AboutUs key={'about_us'} />
                </Section>
                <Section id={'repairs_section'}>
                    <Repairs key={'repairs'} />
                </Section>
                <Section id={'news_section'}>
                    <NewsLandingStrip key={'newsPage'} />
                </Section>
            </main>
            <Footer />
        </>
    );
};

export default LandingPage;
