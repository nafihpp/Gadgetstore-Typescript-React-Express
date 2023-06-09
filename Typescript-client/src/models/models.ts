export interface children {
    children: React.ReactNode
}
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        count: number;
        rate: number;
    }
}
export interface gadgetProduct {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: string | number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
}
export interface CartItemProps {
    id: string | number;
    title: string;
    price: number;
    quantity: number;
    thumbnail: string;
}
