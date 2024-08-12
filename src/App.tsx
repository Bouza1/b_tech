import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages';
import { Article } from './pages';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/article/:articleId" element={<Article />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
