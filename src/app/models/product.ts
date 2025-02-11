export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    rating: number;
    thumbnail: string;
    images: string[];
  }
  
  export interface FilterState {
    category: string;
    priceRange: number[];
    rating: number;
    sortField: string;
    sortOrder: 'asc' | 'desc';
  }