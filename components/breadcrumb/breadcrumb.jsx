import Link from "next/link";
import style from "./breadcrumb.module.scss";

const Breadcrumb = ({ productName, productType }) => {
  const breadcrumbTitle = productName
    ? "Detalle de producto"
    : "Lista de productos";

  const breadcrumbProductType =
    productType && productType === "lightBulbs" ? "Iluminación" : "Cable";

  return (
    <div className={style["breadcrumb-parent"]}>
      <h1 className="heading heading--small heading--color-sec margin-right-3rem">
        {breadcrumbTitle}
      </h1>
      <nav className={style["breadcrumb"]}>
        <span className={style["breadcrumb__line"]}></span>
        <ul className={style["breadcrumb__box"]}>
          <li>
            <Link href="/" className="breadcrumb__link">
              <a>Home</a>
            </Link>
          </li>
          <span className="breadcrumb__span">&gt;</span>
          <li>
            <Link
              href="/products"
              className="breadcrumb__link breadcrumb__link--current"
            >
              <a>Lista de productos</a>
            </Link>
          </li>
          {productName && (
            <>
              <span className="breadcrumb__span">&gt;</span>
              <li>
                <span className="breadcrumb__link breadcrumb__link--current">
                  {breadcrumbProductType} - {productName}
                </span>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
