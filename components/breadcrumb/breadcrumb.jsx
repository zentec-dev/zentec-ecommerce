"use client";

import Link from "next/link";
import style from "./breadcrumb.module.scss";
/* import { usePathname, useSearchParams } from "next/navigation"; */
import { useState } from "react";

const Breadcrumb = () => {
  /*  const pathname = usePathname();
  const searchParams = useSearchParams(); */
  const pathname = "/products";
  /*   const searchParams = useSearchParams(); */
  const [productName] = useState("");
  const productsList = "Lista de productos";
  const productDetails = "Detalle de productos";

  /*  useEffect(() => {
    console.log("pathname", pathname);

    if (pathname !== "/products" && pathname !== null) {
      const urlPath = pathname.split("_0-")[0];
      const name = urlPath.replaceAll("-", " ").replaceAll("/products/", "");

      setProductName(name);
      console.log("pathname", pathname);
      console.log("name", name);
    } else {
      setProductName("");
    }
  }, [pathname, searchParams]); */

  return (
    <div className={style["breadcrumb-parent"]}>
      <h1 className="heading heading--small heading--color-sec margin-right-3rem">
        {pathname === "/products" ? productsList : productDetails}
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
                  {productName}
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
