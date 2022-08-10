import store from '../store';

export const removeZeroQty = () => {
  store.cartUpdate(
    store.cart.filter((item) => {
      return item.product.qty;
    })
  );
};
