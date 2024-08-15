interface Product {
    id: string;
    imgUrl: string;
    name: string;
    price: number;
}

export interface NewsArticle {
    id: number;
    date:string;
    title: string;
    content: string[];
    imgUrl: string;
    altText: string;
    author: string;
    shares: { linkedIn: number; facebook: number };
}

export interface Phone extends Product {
    bannerStats?: string[];
}

