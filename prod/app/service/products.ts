import axios from "axios";

const BASE_PRODUCT_URL = 'https://fakestoreapi.com';

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number; };
}

export interface GetProductsResponse {
    products: Product[] | null;
    error: string | null; // Changed to string for easier serialization
}

export interface GetProductResponse {
    product: Product | null;
    error: string | null;
}

export const getProducts = async (): Promise<GetProductsResponse> => {
    try {
        const url = `${BASE_PRODUCT_URL}/products`;
        const res = await axios.get<Product[]>(url);
        return { products: res.data, error: null };
    } catch (err: any) {
        return { 
            products: null, 
            error: err.message || "failed to fetch data" 
        };
    }
};


export const getProductById = async (id: number): Promise<GetProductResponse> => {
try {
    const url = `${BASE_PRODUCT_URL}/products/${id}`;
    const res = await axios.get<Product>(url);
    return { product: res.data, error: null };
} catch (error: any) {
    return { 
            product: null, 
            error: error.message || "failed to fetch data" 
        };
}
}