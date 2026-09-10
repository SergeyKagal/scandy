export const isProductInCart = (cart, product) => {
  let res = false;
  cart.forEach((cartItem) => {
    if (
      JSON.stringify(cartItem.product.attributes) ===
      JSON.stringify(product.attributes)
    ) {
      res = true;
    }
  });
  return res;
};
