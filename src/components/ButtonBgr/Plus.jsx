import React from 'react';

const plusButton = {
  cart: (
    <svg
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 15V30"
        stroke="#1D1F22"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 22.5H30"
        stroke="#1D1F22"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="0.5" y="0.5" width="44" height="44" stroke="#1D1F22" />
    </svg>
  ),
  bag: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 8V16"
        stroke="#1D1F22"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H16"
        stroke="#1D1F22"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="0.5" y="0.5" width="23" height="23" stroke="#1D1F22" />
    </svg>
  ),
};

export const plusBtn = (cartClass) =>
  cartClass === 'cart' ? plusButton.cart : plusButton.bag;
