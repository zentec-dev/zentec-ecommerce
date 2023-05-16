export const createCablesAdapter = (product) => {
  return {
    id: product.id,
    internalCode: product.internalCode,
    name: product.name,
    price: product.price,
    published: product.published,
    caliber: product.caliber,
    description: product.description,
    available: product.available,
    discount: product.discount,
    image: {
      id: product.image.id,
      name: product.image.name,
      route: product.image.route,
    },
    type: product.type,
  };
};
