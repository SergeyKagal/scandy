export const isProductInCart = (cart, pdpId, attributes) => {
  let res1 = false;
  let res2 = false;
  cart.forEach((cartItem) => {
    if (cartItem.product.pdpId === pdpId) {
      res1 = true;
    }
    if (
      JSON.stringify(cartItem.product.attributes) === JSON.stringify(attributes)
    ) {
      res2 = true;
    }
  });
  return res1 && res2;
};
