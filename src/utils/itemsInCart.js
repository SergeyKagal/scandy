import { productQtyInCart } from './productQty';

export const itemsInCart = (cart) => {
  const { value } = productQtyInCart(cart);
  if (value > 1) {
    return `${value} items`;
  }
  if (value === 1) {
    return `${value} item`;
  } else {
    return '';
  }
};
