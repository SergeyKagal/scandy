import { toJS } from 'mobx';
import store from '../store';

export const saveCart = () => {
  localStorage.setItem(
    'store',
    JSON.stringify({
      cart: toJS(store.cart),
      currentCurrency: store.currentCurrency,
      currentCategory: store.currentCategory,
      currentCurrencySymbol: store.currentCurrencySymbol,
      currentProduct: store.currentProduct,
    })
  );
};
