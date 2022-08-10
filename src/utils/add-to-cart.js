import { toJS } from 'mobx';
import store from '../store';
import { isProductInCart } from './isProductInCart';

export const addNewItemToCart = () => {
  const newCartItem = {
    id: `${store.currentProduct.id} ${new Date().toISOString()}`,
    product: {
      ...store.currentProduct,
      images: store.currentProductImages,
      attributes: store.currentProductAttributes,
      qty: 1,
    },
  };
  store.addNewCartItem(newCartItem);
};

export const addToCartHandler = () => {
  if (isProductInCart(store.cart, store.currentProduct)) {
    store.cartUpdate([
      ...toJS(store.cart).map((cartItem) => {
        if (store.currentProduct.id === cartItem.product.id) {
          return {
            id: cartItem.id,
            product: { ...cartItem.product, qty: cartItem.product.qty + 1 },
          };
        } else {
          return cartItem;
        }
      }),
    ]);
  } else {
    let counter = 0;
    store.currentProduct.attributes.forEach((attribute) => {
      attribute.items.map((item) => {
        if (item.isChecked) {
          counter++;
        }
      });
    });
    if (counter === store.currentProduct.attributes.length) {
      addNewItemToCart();
    }
  }
};
