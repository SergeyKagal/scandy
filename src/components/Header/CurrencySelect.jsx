import React, { Component } from 'react';

export default class CurrencySelect extends Component {
  state = {
    isShowCurrencyList: false,
    buttonClass: 'header__nav-currensy-select',
  };

  clickHandler = () => {
    this.setState({ isShowCurrencyList: !this.state.isShowCurrencyList });
    this.state.isShowCurrencyList
      ? this.setState({ buttonClass: 'header__nav-currensy-select' })
      : this.setState({ buttonClass: 'header__nav-currensy-select-Off' });
  };

  render() {
    return (
      <>
        <button onClick={this.clickHandler} className={this.state.buttonClass}>
          $
        </button>
        {this.state.isShowCurrencyList && (
          <form className="header__nav-currensy-list">
            <label
              htmlFor="currency-usd"
              className="header__nav-currensy-option"
            >
              <span>$ usd</span>
              <input type="radio" name="currency" id="currency-usd" />
            </label>
            <label
              htmlFor="currency-usd"
              className="header__nav-currensy-option"
            >
              <span>£ gbp</span>
              <input type="radio" name="currency" id="currency-usd" />
            </label>
            <label
              htmlFor="currency-usd"
              className="header__nav-currensy-option"
            >
              <span>$ aud</span>
              <input type="radio" name="currency" id="currency-usd" />
            </label>
            <label
              htmlFor="currency-usd"
              className="header__nav-currensy-option"
            >
              <span>¥ jpy</span>
              <input type="radio" name="currency" id="currency-usd" />
            </label>
            <label
              htmlFor="currency-usd"
              className="header__nav-currensy-option"
            >
              <span>₽ rub</span>
              <input type="radio" name="currency" id="currency-usd" />
            </label>
          </form>
        )}
      </>
    );
  }
}
