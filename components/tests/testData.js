export const product = {
   id: 1,
   brand: "My brand",
   description: "My Description",
   image: "www.lider.cl/catalogo/images/whiteLineIcon.svg",
   price: 498724,
};

export const discountProduct = {
   ...product,
   id: 2,
   discount: { price: 249362, percentage: 50 },
};

export const products = [product, discountProduct];
