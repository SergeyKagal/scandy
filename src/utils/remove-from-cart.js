import store from '../store';

export const removeCartItem = (product) => {
  store.cartUpdate(
    store.cart.filter((item) => {
      return (
        JSON.stringify(item.product.id) !== JSON.stringify(product.id) &&
        product.isFromPLP &&
        item.product.isFromPLP
      );
    })
  );
};
