import { createContext } from "react";
import { Product } from "../hooks/useProducts";

type SortOrder = "asc" | "desc" | undefined;

export interface ProductContextType {
  page: number;
  limit: number;
  category: string;
  search: string;
  sort: SortOrder;
  totalProducts: number;
  totalCategories: number;
  products: Product[];
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  setCategory: (category: string) => void;
  setSearch: (search: string) => void;
  setSort: (sort: SortOrder) => void;
  resetFilters: () => void;
  isLoading: boolean;
  isError: boolean;
}
export const ProductContext = createContext<ProductContextType | undefined>(undefined);