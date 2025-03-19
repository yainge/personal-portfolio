export interface Project {
    _id: string;
    title: string;
    slug: string;
    description: string;
    tags: string[];
    image: {
        url: string;
        alt: string;
    };
    githubUrl?: string;
    liveUrl?: string;
    category: 'engineering' | 'coding' | 'art';
}

export interface Product {
    _id: string;
    title: string;
    slug: string;
    description: string;
    price: number;
    images: {
        url: string;
        alt: string;
    }[];
    category: 'art' | 'flow-toys' | 'files' | 'crafts';
    shopifyProductId: string;
}

export interface BlogPost {
    _id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: any; // This will be rich text from Sanity
    publishedAt: string;
    tags: string[];
} 