import { Breadcrumb } from "@/components";
import { ProductsProvider } from "@/store/context/productsContext";
import style from "./layout.module.scss";
import { getProduct } from "./[id]/getProduct";
import TestResponsive from "@/components/testResponsive";

const LayoutProduct = async (params: any) => {
  const id = params.children.props.childProp.segment[1];
  const product = await getProduct({
    id: id,
  });

  return (
    <ProductsProvider>
      <section className={style.layout}>
        <TestResponsive />
        <Breadcrumb product={product} />
        {params.children}
      </section>
    </ProductsProvider>
  );
};

export default LayoutProduct;
