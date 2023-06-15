"use client";

import React, { useState } from "react";
import DetailsDescription from "./detailsDescription";
import styleDetails from "./productsDetails.module.scss";

const AllDetails = ({ product }) => {
  const [currentProduct, setCurrentProduct] = useState(null);

  if (
    product === undefined ||
    product === null ||
    Object.keys(product).length === 0
  ) {
    return <div>Error</div>;
  }

  const associatedProducts = [product, ...product?.associatedProducts];

  const handleOnClick = (id) => {
    const arrayProducts = [product, ...associatedProducts];

    const productFound = arrayProducts.find((item) => item.id === id);

    if (productFound) {
      setCurrentProduct(productFound);
    }
  };

  if (currentProduct) {
    return (
      <>
        <div className={styleDetails["details_box-img"]}>
          <figure>
            <img
              src={currentProduct?.image.route}
              alt={currentProduct?.image.route}
            />
          </figure>
        </div>

        <DetailsDescription
          product={currentProduct}
          associatedProducts={associatedProducts}
          handleClickOnElement={handleOnClick}
        />
      </>
    );
  }

  return (
    <>
      <div className={styleDetails["details_box-img"]}>
        <figure>
          <img src={product?.image.route} alt={product?.image.route} />
        </figure>
      </div>

      <DetailsDescription
        product={product}
        associatedProducts={associatedProducts}
        handleClickOnElement={handleOnClick}
      />
    </>
  );
};

export default AllDetails;
