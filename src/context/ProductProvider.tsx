import React, { useState, useEffect } from "react";
import { useProducts } from "../hooks/useProducts";
import { useCategories } from "../hooks/useCategories";
import { ProductContext } from "./ProductContext";

type SortOrder = "asc" | "desc" | undefined;

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOrder>(undefined);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);

  const resetFilters = () => {
    setCategory("");
    setSearch("");
    setSort(undefined);
    setPage(0);
  };

  const { data: productsData } = useProducts({
    page,
    limit,
    category,
    search,
    orderBy: "price",
    orderDirection: sort,
  });

  const { data: categoriesData,isLoading, isError } = useCategories();

  useEffect(() => {
    setTotalProducts(productsData?.total ?? 0);
    setTotalCategories(categoriesData?.length ?? 0);
  }, [productsData, categoriesData]);

  return (
    <ProductContext.Provider
      value={{
        page,
        limit,
        category,
        search,
        sort,
        totalProducts,
        totalCategories,
        products: productsData?.products ?? [],
        setPage,
        setLimit,
        setCategory,
        setSearch,
        setSort,
        resetFilters,
        isLoading,
        isError,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
