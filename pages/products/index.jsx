import Head from "next/head";
import { cablesRef, lightbulbsRef } from "../../config/firebase-config";
import { getDocs } from "firebase/firestore";
import { createLightbulbsAdapter, createCablesAdapter } from "../../adapters";
import { Breadcrumb } from "../../components/breadcrumb";
import { CardProduct } from "../../components";
import Header from "../../components/header";

import style from "./products.module.scss";

export async function getServerSideProps() {
  try {
    const resLightbulb = await getDocs(lightbulbsRef);
    const resCables = await getDocs(cablesRef);

    const lightbulbsData = resLightbulb.docs.map((element) => element.data());
    const cablesData = resCables.docs.map((element) => element.data());

    const adaptedLightbulbsData = lightbulbsData.map((lightbulb) =>
      createLightbulbsAdapter(lightbulb)
    );

    const adaptedCablesData = cablesData.map((cable) =>
      createCablesAdapter(cable)
    );

    const ALL_PRODUCTS = {
      allProducts: [
        { lightBulbs: adaptedLightbulbsData },
        { cables: adaptedCablesData },
        { miscellaneus: [] },
      ],
    };

    return {
      props: {
        products: ALL_PRODUCTS,
        revalidate: 5,
      },
    };
  } catch (error) {
    console.log("error", error);
  }
}

const getAllProductsPublished = ({ allProducts }) => {
  const [arrayLightBulbs] = allProducts.filter(
    (products) => Object.keys(products)[0] === "lightBulbs"
  );

  const [arrayCables] = allProducts.filter(
    (products) => Object.keys(products)[0] === "cables"
  );

  const newArray = [...arrayLightBulbs["lightBulbs"], ...arrayCables["cables"]];

  return newArray.filter((element) => element.published === true);
};

const ProductsPage = ({ products }) => {
  const allProducts = products.allProducts;
  const sortedProducts = getAllProductsPublished({ allProducts });

  return (
    <>
      <Head>
        <title>Zentec</title>
        <meta
          name="description"
          content="Productos Zentec - bombillos y cables"
        />
        <link rel="shortcut icon" type="image/png" href="favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />

      <section className={style.layout}>
        <Breadcrumb />

        <div className={style["products-list"]}>
          {sortedProducts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}

          {sortedProducts.length === 0 && (
            <div className={style["products-list-empty"]}>
              <figure>
                <img src="/img/icon-empty.png" alt="Empty cart" />
              </figure>
              <p>
                En estos momentos no hay productos <br /> disponibles. Por
                favor, regresa mas tarde.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
