export const productQtyInCart = (cart) => {
  let result = 0;
  cart.forEach((cartItem) => {
    result += cartItem.product.qty;
  });
  return { value: result, displayValue: result > 9 ? '9+' : `${result}` };
};
