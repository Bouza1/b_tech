import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages';
import { ArticlePage } from './pages';
import { NewsPage } from './pages';
import ProductPage from './pages/productPage/ProductPage.tsx';
import { LoggerOptions } from './helpers/Logger.tsx';
import { Logger } from './helpers';


function App() {

    const loggerOptions: LoggerOptions = {
        logToConsole: true,
        logToFile: true,
        logFilePath: './logs/app.log',
        maxFileSizeInBytes: 1024 * 1024, // 1MB
        logToAPI: false,
        enableLevels: ["TRACE", "DEBUG", "INFO", "WARN", "ERROR", "FATAL"],
        asyncLogging: true,
        environment: "development"
    };

    const logger = Logger.getInstance(loggerOptions);

    logger.info("This is an info message", "user1", "admin1");
    logger.error("This is an error message", "user1", "admin1");

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/article/:articleId" element={<ArticlePage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/product/:productTable/:productID" element={<ProductPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
