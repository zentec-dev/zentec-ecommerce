import React from "react";
import { getProduct } from "./getProduct";
import DetailsBox from "./detailsBox";
import style from "./productDetails.module.scss";

const ProductDetails = async ({ params }: any) => {
  const product = await getProduct({
    id: params.id,
  });

  if (product === undefined) {
    return (
      <div className={style["details"]}>
        <div className={style["details-empty-error"]}>
          <figure>
            <img src="/img/icon-empty.png" alt="Empty cart" />
          </figure>
          <p>
            Este producto ha sido eliminado o está <br /> siendo editado, por
            favor, intenta más tarde.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={style["details"]}>
      <div className={style["details_box-img"]}>
        <figure>
          <img src={product?.image.route} alt={product?.image.name} />
        </figure>
      </div>

      <DetailsBox product={product} />
    </div>
  );
};

export default ProductDetails;
