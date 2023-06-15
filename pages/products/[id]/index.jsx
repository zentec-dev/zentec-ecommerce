import Head from "next/head";
import { useRouter } from "next/router";
import { getDocs } from "firebase/firestore";
import { cablesRef, lightbulbsRef } from "../../../config/firebase-config";
import { Breadcrumb } from "../../../components/breadcrumb";
import Header from "../../../components/header";
import style from "../products.module.scss";
import styleDetails from "./productsDetails.module.scss";
import AllDetails from "./allDetails";

export async function getServerSideProps() {
  try {
    const resLightbulb = await getDocs(lightbulbsRef);
    const resCables = await getDocs(cablesRef);

    const lightbulbsData = resLightbulb.docs.map((element) => element.data());
    const cablesData = resCables.docs.map((element) => element.data());

    const allProducts = [...lightbulbsData, ...cablesData];

    return {
      props: {
        products: allProducts,
        revalidate: 5,
      },
    };
  } catch (error) {
    console.log("error", error);
  }
}

const getProductDetailPublished = ({ products, itemId }) => {
  const [, id] = itemId.split("_0-");

  const [product] = products.filter((element) => {
    return element.id === id;
  });

  return product;
};

const ProductDetails = ({ products }) => {
  const router = useRouter();
  const { id } = router.query;

  const product = getProductDetailPublished({ products, itemId: id });

  return (
    <>
      <Head>
        <title>Zentec</title>
        <meta
          name="description"
          content="Producto Zentec - bombillos y cables"
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
        <Breadcrumb productName={product?.name} productType={product?.type} />

        <div className={styleDetails["details"]}>
          <AllDetails product={product} />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
