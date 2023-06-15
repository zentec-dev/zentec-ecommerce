import Link from "next/link";
import style from "./cardProduct.module.scss";

const CardProduct = ({ product }) => {
  const createProductRoute = ({ product }) => {
    const name2 = product.name.replace(/\s/g, "-").replace(".", "");
    return `${name2}_0-${product.id}_0-${product.type}`;
  };

  const productRoute = createProductRoute({ product });

  return (
    <Link href={`./products/${productRoute}`}>
      <a className={style.product}>
        <figure className={style["product__box-img"]}>
          <img
            className={style["product__img"]}
            src={product.image.route}
            alt={product.name}
            loading="lazy"
          />
        </figure>
        <div className={style["product__box1"]}>
          <p className={style["product__title"]}>{product.name}</p>
          {/* <span className={style["product__subtitle"]}>#16 / #18</span> */}
          <span className={style["product__price"]}>${product.price}</span>
        </div>
      </a>
    </Link>
  );
};

export default CardProduct;
