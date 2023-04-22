"use client";

import { ProductsContext } from "@/store/context/productsContext";
import { useContext } from "react";

export const useProducts = () => {
  const context = useContext(ProductsContext);
  const { products, addCurrentProduct }: any = context;

  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }

  return {
    products: products,
    addCurrentProduct,
  };
};
