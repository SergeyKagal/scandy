export const qtyChanger = (cart, cartItemId, actionPayload, fn) => {
  const res = [
    ...cart.map((cartItem) => {
      if (cartItem.id === cartItemId) {
        return {
          ...cartItem,
          product: {
            ...cartItem.product,
            qty:
              cartItem.product.qty === 1 && actionPayload === -1
                ? cartItem.product.qty
                : cartItem.product.qty + actionPayload,
          },
        };
      } else {
        return cartItem;
      }
    }),
  ];
  fn(res);
};
