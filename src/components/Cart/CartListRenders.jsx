import { React } from 'react';
import { actionPayload } from '../../constants/action-payload';
import store from '../../store';
import { makeButtonClass } from '../../utils/makeButtonClass';
import { minusBtn } from '../ButtonBgr/Minus';
import { plusBtn } from '../ButtonBgr/Plus';

export function renderTitle(cartClass, cartItem) {
  return (
    <>
      <h5 className={cartClass === 'cart' ? 'cart__product-brand' : undefined}>
        {cartItem.product.brand}
      </h5>
      <h5 className={cartClass === 'cart' ? 'cart__product-name' : undefined}>
        {cartItem.product.name}
      </h5>
    </>
  );
}

export function renderPrice(cartClass, cartItem) {
  return (
    <div className={`${cartClass}__product-price`}>
      {cartItem.product.prices[store.currentCurrency].currency.symbol}
      {cartItem.product.prices[store.currentCurrency].amount.toFixed(2)}
    </div>
  );
}

export function renderAttributes(cartClass, cartItem) {
  return (
    <div className={`${cartClass}__product-attributes`}>
      {!!cartItem.product.attributes.length &&
        cartItem.product.attributes.map((attribute) => (
          <div key={attribute.id} className={`${cartClass}__prop-wrapper`}>
            <span>{attribute.name}:</span>
            <div
              className={
                attribute.name === 'Color'
                  ? `${cartClass}__prop-color-buttons`
                  : `${cartClass}__prop-buttons`
              }
            >
              {attribute.items.map((item) => (
                <button
                  key={item.id}
                  className={makeButtonClass(
                    attribute.name,
                    item.isChecked,
                    cartClass
                  )}
                  style={
                    attribute.name === 'Color'
                      ? { backgroundColor: item.value }
                      : null
                  }
                >
                  {item.value}
                </button>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
export function renderQty(cartClass, cartItem) {
  return (
    <div className={`${cartClass}__product-qty`}>
      <button
        onClick={() => {
          store.cartItemQtyChanger(cartItem.id, actionPayload.increment);
        }}
      >
        {plusBtn(cartClass)}
      </button>
      <p>{cartItem.product.qty}</p>
      <button
        onClick={() => {
          store.cartItemQtyChanger(cartItem.id, actionPayload.decrement);
        }}
      >
        {minusBtn(cartClass)}
      </button>
    </div>
  );
}

export function renderImage(cartClass, cartItem, imageNumber) {
  return (
    <img
      className={`${cartClass}__product-image`}
      src={cartItem.product.images[imageNumber].imageUrl}
      alt="product image"
    />
  );
}
export function renderImageChanger(imageButtonHandler) {
  return (
    <div className="image-changer">
      <button
        className="image-changer-left"
        onClick={() => imageButtonHandler(actionPayload.decrement)}
      ></button>
      <button
        className="image-changer-right"
        onClick={() => imageButtonHandler(actionPayload.increment)}
      ></button>
    </div>
  );
}
