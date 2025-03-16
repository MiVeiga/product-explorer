import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface CategoryResponse {
  slug: string;
  name: string;
}

const fetchCategories = async (): Promise<string[]> => {
  const { data } = await axios.get<CategoryResponse[]>('https://dummyjson.com/products/categories');
  return data.map((category) => category.slug);
};

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 60,
  });
}