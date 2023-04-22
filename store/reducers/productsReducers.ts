import {
  AllProductsProps,
  ProductCablesProps,
  ProductLightBulbsProps,
} from "@/models/product";

interface initialStateProps {
  currrentProduct: ProductLightBulbsProps | ProductCablesProps | {};
}

type addAllProductsType = {
  type: "ADD_CURRENT_PRODUCT";
  payload: initialStateProps;
};

interface initialStateProps {
  currrentProduct: ProductLightBulbsProps | ProductCablesProps | {};
}

export const productsInitialState: initialStateProps = {
  currrentProduct: {},
};

const UPDATE_STATE_BY_ACTION = {
  ADD_CURRENT_PRODUCT: (
    state: AllProductsProps,
    action: addAllProductsType
  ) => {
    /*  console.log("state", state);
    console.log("action", action.payload); */

    return {
      currrentProduct: { ...action.payload },
    };
  },
};

export const productsReducer = (state: any, action: any) => {
  const { type: actionType } = action;
  const updateState =
    UPDATE_STATE_BY_ACTION[actionType as keyof typeof UPDATE_STATE_BY_ACTION];
  return updateState ? updateState(state, action) : state;
};
