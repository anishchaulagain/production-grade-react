export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

// API response interface
export interface ProductResponse {
  total: number;
  limit: number;
  offset: number;
  results: Product[];
}