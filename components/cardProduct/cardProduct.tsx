import { ProductCablesProps, ProductLightBulbsProps } from "@/models/product";
import style from "./cardProduct.module.scss";
import Link from "next/link";

interface CardProductProps {
  product: ProductLightBulbsProps | ProductCablesProps;
}

const CardProduct = ({ product }: CardProductProps) => {
  const createProductRoute = ({ product }: CardProductProps) => {
    const name2 = product.name.replace(/\s/g, "-").replace(".", "");
    return `${name2}_0-${product.id}_0-${product.type}`;
  };

  const productRoute = createProductRoute({ product });

  return (
    <Link
      href={`./products/[id]`}
      as={`./products/${productRoute}`}
      className={style.product}
    >
      <div className={style["product__box-img"]}>
        <img
          className={style["product__img"]}
          src={product.image.route}
          alt={product.name}
          loading="lazy"
        />
      </div>
      <div className={style["product__box1"]}>
        <p className={style["product__title"]}>{product.name}</p>
        {/* <span className={style["product__subtitle"]}>#16 / #18</span> */}
        <span className={style["product__price"]}>${product.price}</span>
      </div>
    </Link>
  );
};

export default CardProduct;
