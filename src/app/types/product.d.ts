export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface GetUserResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}


interface ProductPreview {
    id: Product["id"]
    title: Product["title"]
}