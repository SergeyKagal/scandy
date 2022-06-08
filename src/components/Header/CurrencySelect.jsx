import React, { Component } from 'react';

export default class CurrencySelect extends Component {
  state = {
    isShowCurrencyList: false,
  };

  render() {
    return (
      <>
        <button className="header__nav-currensy-select">$</button>
        {this.state.isShowCurrencyList && (
          <ul className="header__nav-currensy-list">
            <li value="usd" className="header__nav-currensy-option">
              $ usd
            </li>
            <li value="gbp" className="header__nav-currensy-option">
              £ gbp
            </li>
            <li value="aud" className="header__nav-currensy-option">
              $ aud
            </li>
            <li value="jpy" className="header__nav-currensy-option">
              ¥ jpy
            </li>
            <li value="rub" className="header__nav-currensy-option">
              ₽ rub
            </li>
          </ul>
        )}
      </>
    );
  }
}
