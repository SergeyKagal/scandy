import React, { Component } from 'react';

export default class CurrencySelect extends Component {
  state = {
    isShowCurrencyList: false,
    buttonClass: 'header__nav-currensy-select currency-arrow-down',
    currencyList: [
      {
        id: 'currency-usd',
        title: '$ usd',
        isChecked: true,
        labelClass: 'header__nav-currensy-option label-checked',
      },
      {
        id: 'currency-gbp',
        title: '£ gbp',
        isChecked: false,
        labelClass: 'header__nav-currensy-option',
      },
      {
        id: 'currency-aud',
        title: '$ aud',
        isChecked: false,
        labelClass: 'header__nav-currensy-option',
      },
      {
        id: 'currency-jpy',
        title: '¥ jpy',
        isChecked: false,
        labelClass: 'header__nav-currensy-option',
      },
      {
        id: 'currency-rub',
        title: '₽ rub',
        isChecked: false,
        labelClass: 'header__nav-currensy-option',
      },
    ],
  };

  clickHandler = () => {
    this.setState({ isShowCurrencyList: !this.state.isShowCurrencyList });
    this.state.isShowCurrencyList
      ? this.setState({
          buttonClass: 'header__nav-currensy-select currency-arrow-down',
        })
      : this.setState({
          buttonClass: 'header__nav-currensy-select currency-arrow-up',
        });
  };
  changeHandler = (id) => {
    let resultList = [...this.state.currencyList];
    resultList.forEach((currency, index) => {
      if (id === currency.id) {
        currency.isChecked = true;
        currency.labelClass = 'header__nav-currensy-option label-checked';
      } else {
        currency.isChecked = false;
        currency.labelClass = 'header__nav-currensy-option';
      }
      this.setState({ currencyList: resultList });
      this.clickHandler();
    });
  };

  render() {
    return (
      <>
        <button onClick={this.clickHandler} className={this.state.buttonClass}>
          $
        </button>
        {this.state.isShowCurrencyList && (
          <form className="header__nav-currensy-list">
            {this.state.currencyList.map((currency) => {
              return (
                <label
                  key={currency.id}
                  htmlFor={currency.id}
                  className={currency.labelClass}
                >
                  <span>{currency.title}</span>
                  <input
                    className="currency-input"
                    type="radio"
                    name="currency"
                    id={currency.id}
                    defaultChecked={currency.isChecked}
                    onChange={() => this.changeHandler(currency.id)}
                  />
                </label>
              );
            })}
          </form>
        )}
      </>
    );
  }
}
