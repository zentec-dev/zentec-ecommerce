"use client";

import { ProductCablesProps, ProductLightBulbsProps } from "@/models/product";
import { useReducer, createContext } from "react";
import {
  productsInitialState,
  productsReducer,
} from "../reducers/productsReducers";

type AddProductFunctionType = {
  product: ProductLightBulbsProps | ProductCablesProps;
};

interface initialStateProps {
  currrentProduct: ProductLightBulbsProps | ProductCablesProps | {};
}

interface ProductsContextProps {
  products: initialStateProps;
  addCurrentProduct: (action: AddProductFunctionType) => void;
}

export const ProductsContext = createContext<ProductsContextProps | undefined>(
  undefined
);

function useProductsReducer() {
  const [state, dispatch] = useReducer(productsReducer, productsInitialState);

  const addCurrentProduct = ({ product }: AddProductFunctionType) => {
    return dispatch({
      type: "ADD_CURRENT_PRODUCT",
      payload: product,
    });
  };

  return { state, addCurrentProduct };
}

interface ProductsProviderProps {
  children: JSX.Element;
}

export function ProductsProvider({ children }: ProductsProviderProps) {
  const { state, addCurrentProduct } = useProductsReducer();

  return (
    <ProductsContext.Provider
      value={{
        products: state,
        addCurrentProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
