export const productQtyInCart = (cart) => {
  let res = 0;
  cart.forEach((cartItem) => {
    res += cartItem.product.qty;
  });
  return res > 9 ? '9+' : res;
};
