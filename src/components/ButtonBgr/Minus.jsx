import React from 'react';

const minusButton = {
  bag: <img src="./images/minus24.svg" alt="minus-btn" />,
  cart: <img src="./images/minus45.svg" alt="minus-btn" />,
};

export const minusBtn = (cartClass) =>
  cartClass === 'cart' ? minusButton.cart : minusButton.bag;
