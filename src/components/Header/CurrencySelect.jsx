import React, { PureComponent } from 'react';
import { toJS } from 'mobx';
import store from '../../store';
import { observer } from 'mobx-react';

class CurrencySelect extends PureComponent {
  state = {
    isShowCurrencyList: false,
    buttonClass: 'header__nav-currensy-select currency-arrow-down',
  };

  clickHandler = () => {
    store.showHideCurrencyList();
    store.isShowCurrencyList
      ? this.setState({
          buttonClass: 'header__nav-currensy-select currency-arrow-down',
        })
      : this.setState({
          buttonClass: 'header__nav-currensy-select currency-arrow-up',
        });
  };

  wrapperClickHandler = (e, id) => {
    e.stopPropagation();
    if (id === 'wrapper') {
      setTimeout(() => {
        store.showHideCurrencyList();
      }, 0);
    } else {
      let resultList = [...toJS(store.currencyList)];
      resultList.forEach((currency, i) => {
        if (id === currency.id) {
          currency.isChecked = true;
          currency.labelClass = 'header__nav-currensy-option label-checked';
          store.setCurrentCurrency(i);
          store.setCurrentCurrencySymbol(currency.symbol);
        } else {
          currency.isChecked = false;
          currency.labelClass = 'header__nav-currensy-option';
        }
        store.setCurrencyList(resultList);
      });
    }
  };

  render() {
    return (
      <>
        <button onClick={this.clickHandler} className={this.state.buttonClass}>
          {store.currentCurrencySymbol}
        </button>
        {store.isShowCurrencyList && (
          <div
            className="currency-list-wrapper"
            onClick={(e) => this.wrapperClickHandler(e, 'wrapper')}
          >
            <div>
              <form className="header__nav-currensy-list">
                {store.currencyList.map((currency) => {
                  return (
                    <label
                      key={currency.id}
                      htmlFor={currency.id}
                      className={currency.labelClass}
                    >
                      <span className="list-item-span">{currency.title}</span>
                      <input
                        className="currency-input"
                        type="radio"
                        name="currency"
                        id={currency.id}
                        onClick={(e) =>
                          this.wrapperClickHandler(e, currency.id)
                        }
                      />
                    </label>
                  );
                })}
              </form>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default observer(CurrencySelect);
