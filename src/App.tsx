import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages';
import { ArticlePage } from './pages';
import { NewsPage } from './pages';
import ProductPage from './pages/productPage/ProductPage.tsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/article/:articleId" element={<ArticlePage />} />
                <Route path="/news" element={<NewsPage/>} />
                <Route path="/product/:productID" element={<ProductPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
