"use client";

import { useProducts } from "@/hooks/use-products";
import { useEffect } from "react";
import style from "./productDetails.module.scss";

const DetailsSubtitlePower = ({ internalCode, power }) => {
  return (
    <p className={style["details_subtitle"]}>
      <span>{internalCode}</span>
      <span>({power})</span>
    </p>
  );
};

const DetailsSubtitleCaliber = ({ internalCode, caliber }) => {
  return (
    <p className={style["details_subtitle"]}>
      <span>{internalCode}</span>
      <span>({caliber})</span>
    </p>
  );
};

const DetailsBox = ({ product }) => {
  const { addCurrentProduct } = useProducts();

  useEffect(() => {
    addCurrentProduct({ product });
  }, []);

  return (
    <div className={style["details_box"]}>
      <h1 className={`heading--small ${style["details_title"]}`}>
        {product?.name}
      </h1>

      {product.type === "lightBulbs" ? (
        <DetailsSubtitlePower
          internalCode={product.internalCode}
          power={product.power}
        />
      ) : (
        <DetailsSubtitleCaliber
          internalCode={product.internalCode}
          caliber={product.caliber}
        />
      )}

      <div className={style["details_subtitle2"]}>
        <span className={style["details_price"]}>${product?.price}</span>
        {product?.available === false ? (
          <span className={style["details_not-available"]}>Agotado</span>
        ) : (
          <span className={style["details_available"]}>Disponible</span>
        )}
      </div>
    </div>
  );
};

export default DetailsBox;
