import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Product {
  id: number;
  title: string;
  brand: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  description: string;
  thumbnail: string;
  images: string[];
}

interface FetchProductsParams {
  page: number;
  limit: number;
  category?: string;
  search?: string;
  orderBy?: "price" | "rating" | "title";
  orderDirection?: "asc" | "desc"; 
}

const fetchProducts = async ({
  page,
  limit,
  category,
  search,
  orderBy,
  orderDirection,
}: FetchProductsParams) => {
  let url = `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`;

  if (category && search) {
    url = `https://dummyjson.com/products/category/${category}?limit=100`;
  } else if (category) {
    url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${page * limit}`;
  } else if (search) {
    url = `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}&limit=${limit}&skip=${page * limit}`;
  }

  if (orderBy && orderDirection) {
    url += `&sortBy=${orderBy}&order=${orderDirection}`;
  }

  const { data } = await axios.get<{ products: Product[]; total: number }>(url);

  if (category && search) {
    const filteredProducts = data.products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    return {
      products: filteredProducts.slice(page * limit, (page + 1) * limit),
      total: filteredProducts.length,
    };
  }

  return data;
};

export function useProducts(params: FetchProductsParams) {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => fetchProducts(params),
    staleTime: 1000 * 60 * 5,
  });
}
