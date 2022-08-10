import { toJS } from 'mobx';
export const totalCount = (cart, currentCurrency) => {
  const res = { symbol: '', amount: 0 };
  if (!toJS(cart).length) {
    return res;
  }
  if (toJS(cart)[0].product.prices[currentCurrency].currency) {
    res.symbol = toJS(cart)[0].product.prices[currentCurrency].currency.symbol;
    toJS(cart).forEach((item) => {
      res.amount =
        res.amount +
        item.product.prices[currentCurrency].amount * item.product.qty;
    });
  }

  return res;
};
