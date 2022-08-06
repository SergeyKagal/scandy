export const isProductInCart = (cart, product) => {
  //   let res1 = false;
  let res = false;
  cart.forEach((cartItem) => {
    // if (cartItem.product.pdpId === pdpId) {
    //   res1 = true;
    // }
    if (
      JSON.stringify(cartItem.product.attributes) ===
      JSON.stringify(product.attributes)
    ) {
      res = true;
    }
  });
  return res;
};
