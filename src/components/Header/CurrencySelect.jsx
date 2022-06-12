import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getData } from '../../utils/getData';

export default class CurrencySelect extends Component {
  state = {
    isShowCurrencyList: false,
    buttonClass: 'header__nav-currensy-select currency-arrow-down',
  };

  getCurrencies = async () => {
    const { currencies } = await getData('query {currencies {label,symbol}}');
    this.setState({
      currencyList: currencies.map((currency, i) => {
        if (i) {
          return {
            id: `currency-${currency.label}`,
            title: `${currency.symbol} ${currency.label}`,
            isChecked: false,
            labelClass: 'header__nav-currensy-option',
          };
        } else {
          return {
            id: `currency-${currency.label}`,
            title: `${currency.symbol} ${currency.label}`,
            isChecked: true,
            labelClass: 'header__nav-currensy-option label-checked',
          };
        }
      }),
    });
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
    resultList.forEach((currency) => {
      if (id === currency.id) {
        currency.isChecked = true;
        currency.labelClass = 'header__nav-currensy-option label-checked';
        this.props.switchCurrency(id);
      } else {
        currency.isChecked = false;
        currency.labelClass = 'header__nav-currensy-option';
      }
      this.setState({ currencyList: resultList });
      this.clickHandler();
    });
  };

  componentDidMount = () => {
    this.getCurrencies();
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
                    onClick={this.clickHandler}
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
CurrencySelect.propTypes = {
  switchCurrency: PropTypes.func.isRequired,
};
