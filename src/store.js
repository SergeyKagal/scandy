import { makeObservable, observable, action, autorun } from 'mobx';
import { queries } from './constants/queries';
import { getData } from './utils/getData';

class Store {
  currentCurrency = 0;
  currentCurrencySymbol = '$';
  currencyList = [];

  setCurrentCurrency(num) {
    this.currentCurrency = num;
  }
  setCurrentCurrencySymbol(symbol) {
    this.currentCurrencySymbol = symbol;
  }
  setCurrencyList(list) {
    this.currencyList = list;
  }
  async getCurrencies() {
    const { currencies } = await getData(queries.currensy);
    this.currencyList = currencies.map((currency, i) => {
      if (i) {
        return {
          id: `currency-${currency.label}`,
          title: `${currency.symbol} ${currency.label}`,
          isChecked: false,
          labelClass: 'header__nav-currensy-option',
          symbol: `${currency.symbol}`,
        };
      } else {
        return {
          id: `currency-${currency.label}`,
          title: `${currency.symbol} ${currency.label}`,
          isChecked: true,
          labelClass: 'header__nav-currensy-option label-checked',
          symbol: `${currency.symbol}`,
        };
      }
    });
  }

  constructor() {
    makeObservable(this, {
      currentCurrency: observable,
      currentCurrencySymbol: observable,
      currencyList: observable,
      setCurrentCurrency: action,
      setCurrentCurrencySymbol: action,
      getCurrencies: action,
      setCurrencyList: action,
    });
  }
}

const store = new Store();

autorun(async () => {
  await store.getCurrencies();
});

export default store;
