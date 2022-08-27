import React from 'react';

const plusButton = {
  cart: <img src="./images/plus45.svg" alt="plus-btn" />,
  bag: <img src="./images/plus24.svg" alt="plus-btn" />,
};

export const plusBtn = (cartClass) =>
  cartClass === 'cart' ? plusButton.cart : plusButton.bag;
