export const totalCount = (cart, currentCurrency) => {
  const res = { symbol: '', amount: 0 };
  if (!cart.length) {
    return res;
  }

  res.symbol = cart[0].product.prices[currentCurrency].currency.symbol;
  cart.forEach((item) => {
    res.amount =
      res.amount +
      item.product.prices[currentCurrency].amount * item.product.qty;
  });

  return res;
};
