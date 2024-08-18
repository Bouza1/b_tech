export interface NewsArticle {
    id: number;
    date: string;
    title: string;
    content: string[];
    imgUrl: string;
    altText: string;
    author: string;
    shares: { linkedIn: number; facebook: number };
}

interface BaseProduct {
    id: string;
    imgUrl: string;
    name: string;
    price: number;
    table: string;
}

export interface Phone extends BaseProduct {
    bannerStats?: string[];
}
