import { createLightbulbsAdapter, createCablesAdapter } from "@/adapters";
import { CardProduct } from "@/components";
import { cablesRef, lightbulbsRef } from "@/config/firebase-config";
import { ProductCablesProps, ProductLightBulbsProps } from "@/models/product";
import { getDocs } from "firebase/firestore";
import style from "./products.module.scss";

async function getProducts() {
  /*  await new Promise((resolve) => setTimeout(resolve, 50000)); */

  try {
    const resLightbulb = await getDocs(lightbulbsRef);
    const resCables = await getDocs(cablesRef);

    const lightbulbsData: any[] = resLightbulb.docs.map((element) =>
      element.data()
    );

    const cablesData: any[] = resCables.docs.map((element) => element.data());

    const adaptedLightbulbsData = lightbulbsData.map(
      (lightbulb: ProductLightBulbsProps) => createLightbulbsAdapter(lightbulb)
    );

    const adaptedCablesData = cablesData.map((cable: ProductCablesProps) =>
      createCablesAdapter(cable)
    );

    setTimeout(() => {}, 2000);

    const ALL_PRODUCTS = {
      allProducts: [
        { lightBulbs: adaptedLightbulbsData },
        { cables: adaptedCablesData },
        { miscellaneus: [] },
      ],
    };

    return ALL_PRODUCTS.allProducts;
  } catch (error) {
    console.log("error", error);
  }
}

function getAllProductsPublished({ allProducts }: any) {
  const [arrayLightBulbs] = allProducts.filter(
    (products: ProductLightBulbsProps) =>
      Object.keys(products)[0] === "lightBulbs"
  );

  const [arrayCables] = allProducts.filter(
    (products: ProductCablesProps) => Object.keys(products)[0] === "cables"
  );

  const newArray = [...arrayLightBulbs["lightBulbs"], ...arrayCables["cables"]];

  return newArray.filter((element) => element.published === true);
}

export default async function Products() {
  const allProducts = await getProducts();
  const products = getAllProductsPublished({ allProducts });

  return (
    <div className={style["products-list"]}>
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}

      {products.length === 0 && (
        <div className={style["products-list-empty"]}>
          <figure>
            <img src="/img/icon-empty.png" alt="Empty cart" />
          </figure>
          <p>
            En estos momentos no hay productos <br /> disponibles. Por favor,
            regresa mas tarde.
          </p>
        </div>
      )}
    </div>
  );
}
