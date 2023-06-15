"use client";

import style from "./productsDetails.module.scss";

const DetailsElements = ({
  internalCode,
  productPowerOrCaliber,
  price,
  discount,
  available,
  description,
  active,
  handleClickOnElement,
}) => {
  const parentClasses = active
    ? `${style["details_box-description"]} ${style["details_box-description--active"]}`
    : style["details_box-description"];

  return (
    <>
      <div className={parentClasses} onClick={handleClickOnElement}>
        <p className={style["details_subtitle"]}>
          <span>{internalCode}</span>
          <span>{productPowerOrCaliber}</span>
        </p>
        <div className={style["details_box-price"]}>
          <span className={style["details_price"]}>${price}</span>
          <span>{discount}% de descuento</span>
        </div>
        {available ? (
          <span className={style["details_available"]}>Disponible</span>
        ) : (
          <span className={style["details_not-available"]}>Agotado</span>
        )}
      </div>

      <p className={style["details_p-des"]}>{description}</p>
    </>
  );
};

const DetailsDescription = ({
  product,
  associatedProducts,
  handleClickOnElement,
}) => {
  return (
    <div className={style["details_box"]}>
      <h1 className={`heading--small ${style["details_title"]}`}>
        {product?.name}
      </h1>

      {associatedProducts?.map((item) => {
        const productPowerOrCaliber =
          product?.type === "lightBulbs" ? item?.power : item?.caliber;

        return (
          <DetailsElements
            key={item?.id}
            internalCode={item?.internalCode}
            productPowerOrCaliber={productPowerOrCaliber}
            price={item?.price}
            discount={item?.discount}
            available={item?.available}
            description={item?.description}
            active={item?.id === product.id}
            handleClickOnElement={() => handleClickOnElement(item.id)}
          />
        );
      })}
    </div>
  );
};

export default DetailsDescription;
