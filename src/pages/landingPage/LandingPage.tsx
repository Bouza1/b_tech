import { NavBar, Section } from '../../components';
import { WelcomeBanner } from './sections/Home';
import { PopularProducts } from './sections/PopularProducts';
import { AboutUs } from './sections/AboutUs';
import { Repairs } from './sections/Repairs';
import News from './sections/News/News.tsx';

const LandingPage = () => {
    return (
        <>
            <NavBar showHighlight={true} />
            <main>
                <Section id={'home'}>
                    <WelcomeBanner />
                </Section>
                <Section id={'products'}>
                    <PopularProducts />
                </Section>
                <Section id={'about-us'}>
                    <AboutUs />
                </Section>
                <Section id={'repairs'}>
                    <Repairs />
                </Section>
                <Section id={'news'}>
                    <News />
                </Section>
            </main>
        </>
    );
};

export default LandingPage;
