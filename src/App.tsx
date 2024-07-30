import './App.css';
import { NavBar, Section } from './components';
import { RefurbishedDevices, WelcomeBanner } from './sections';

function App() {
    return (
        <>
            <NavBar />
            <main>
                <Section id={'home'}>
                    <WelcomeBanner />
                </Section>
                <Section id={'products'}>
                    <p>2: Latest Products</p>
                </Section>
                <Section id={'about-us'}>
                    <RefurbishedDevices />
                </Section>
                <Section id={'repairs'}>
                    <p>4: Repairs</p>
                </Section>
            </main>
        </>
    );
}

export default App;
