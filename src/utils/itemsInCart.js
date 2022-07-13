import { productQtyInCart } from './productQty';

export const itemsInCart = (cart) => {
  const res = productQtyInCart(cart).value;
  if (res > 1) {
    return `${res} items`;
  }
  if (res === 1) {
    return `${res} item`;
  } else {
    return '';
  }
};
