export const createLightbulbsAdapter = (product) => {
  return {
    id: product.id,
    internalCode: product.internalCode,
    name: product.name,
    price: product.price,
    power: product.power,
    published: product.published,
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
