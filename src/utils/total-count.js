import { toJS } from 'mobx';
export const totalCount = (cart, currentCurrency) => {
  console.log(toJS(cart), currentCurrency);
  const res = { symbol: '', amount: 0 };
  if (!cart.length) {
    return res;
  }
  if (cart[0].product.prices.currency) {
    res.symbol = cart[0].product.prices[currentCurrency].currency.symbol;
    cart.forEach((item) => {
      console.log(item);
      res.amount =
        res.amount +
        item.product.prices[currentCurrency].amount * item.product.qty;
    });
  }

  return res;
};
