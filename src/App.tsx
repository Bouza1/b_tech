import './App.css';
import { NavBar, Section } from './components';
import { PopularProducts, RefurbishedDevices, WelcomeBanner } from './sections';
import TeamProfile from './sections/TeamProfileCard.tsx';
import AboutUs from './sections/AboutUs.tsx';

function App() {
    return (
        <>
            <NavBar />
            <main>
                <Section id={'home'} dynamicResize={true}>
                    <WelcomeBanner />
                </Section>
                <Section id={'products'} dynamicResize={true}>
                    <PopularProducts/>
                </Section>
                <Section id={'about-us'} dynamicResize={false}>
                    <AboutUs/>
                </Section>
                <Section id={'repairs'}>
                    <p>4: Repairs</p>
                </Section>
            </main>
        </>
    );
}

export default App;
