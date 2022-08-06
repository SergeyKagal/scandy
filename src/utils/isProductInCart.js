export const isProductInCart = (cart, product) => {
  //   let res1 = false;
  let res2 = false;
  cart.forEach((cartItem) => {
    // if (cartItem.product.pdpId === pdpId) {
    //   res1 = true;
    // }
    if (JSON.stringify(cartItem.product) === JSON.stringify(product)) {
      res2 = true;
    }
  });
  return res2;
};
