import './App.css';
import { NavBar, Section } from './components';
import { AboutUs, PopularProducts, Repairs, WelcomeBanner } from './sections';
import News from './sections/News/News.tsx';

function App() {
    return (
        <>
            <NavBar />
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
                    <News/>
                </Section>
            </main>
        </>
    );
}

export default App;
