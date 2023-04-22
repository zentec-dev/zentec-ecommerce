import Link from "next/link";
import style from "./breadcrumb.module.scss";
import { ProductMixCablesOrLightBulbs } from "@/models/product";

interface BreadcrumbProps {
  product: ProductMixCablesOrLightBulbs | undefined;
}

const Breadcrumb = ({ product }: BreadcrumbProps) => {
  return (
    <div className={style["breadcrumb-parent"]}>
      <h1 className="heading heading--small heading--color-sec margin-right-3rem">
        Lista de productos
      </h1>
      <nav className={style["breadcrumb"]}>
        <span className={style["breadcrumb__line"]}></span>
        <ul className={style["breadcrumb__box"]}>
          <li>
            <Link href="/" className="breadcrumb__link">
              Home
            </Link>
          </li>
          <span className="breadcrumb__span">&gt;</span>
          <li>
            <Link
              href="/products"
              className="breadcrumb__link breadcrumb__link--current"
            >
              Lista de productos
            </Link>
          </li>

          {/* {product?.name && (
            <>
              <span className="breadcrumb__span">&gt;</span>
              <li>
                <Link
                  href="/products"
                  className="breadcrumb__link breadcrumb__link--current"
                >
                  {product?.name}
                </Link>
              </li>
            </>
          )} */}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
