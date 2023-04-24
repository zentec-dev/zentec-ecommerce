import { Breadcrumb } from "@/components";
import { ProductsProvider } from "@/store/context/productsContext";
import style from "./layout.module.scss";

const LayoutProduct = async (params: any) => {
  return (
    <ProductsProvider>
      <section className={style.layout}>
        <Breadcrumb />
        {params.children}
      </section>
    </ProductsProvider>
  );
};

export default LayoutProduct;
