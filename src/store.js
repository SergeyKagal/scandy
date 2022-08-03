import { autorun, makeAutoObservable, toJS } from 'mobx';
import { queries } from './constants/queries';
import { getData } from './utils/getData';

class Store {
  //--currencies
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

  //--cart

  cart = [];
  cartUpdate(newCart) {
    this.cart = newCart;
  }
  addNewCartItem(newCartItem) {
    this.cart.push(newCartItem);
  }

  cartItemQtyChanger(cartItemId, actionPayload) {
    this.cart = [
      ...this.cart.map((cartItem) => {
        if (cartItem.id === cartItemId) {
          return {
            ...cartItem,
            product: {
              ...cartItem.product,
              qty:
                cartItem.product.qty === 1 && actionPayload === -1
                  ? cartItem.product.qty
                  : cartItem.product.qty + actionPayload,
            },
          };
        } else {
          return cartItem;
        }
      }),
    ];
  }

  //---navList
  navList = [];
  currentCategory = '';
  set newNavList(list) {
    this.navList = list;
  }
  get newNavList() {
    return this.navList;
  }
  set newCurrentCategory(newCurrentCategory) {
    this.currentCategory = newCurrentCategory;
  }
  //---------------------------------------------------
  constructor() {
    // makeObservable(this, {
    //   cart: observable,
    //   currentCurrency: observable,
    //   currentCurrencySymbol: observable,
    //   currencyList: observable,
    //   navList: observable,
    //   setCurrentCurrency: action,
    //   setCurrentCurrencySymbol: action,
    //   getCurrencies: action,
    //   setCurrencyList: action,
    //   cartUpdate: action,
    //   addNewCartItem: action,
    //   cartItemQtyChanger: action,

    // });
    makeAutoObservable(this);
  }
  //-------------------------------------------------
}

const store = new Store();

autorun(async () => {
  await store.getCurrencies();
  const { categories } = await getData(queries.navList);
  store.newNavList = categories.map((item, i) => {
    return { ...item, id: `${i}${item.name}`, path: `/${item.name}` };
  });
  store.currentCategory = store.navList[0];
  console.log(toJS(store.currentCategory));
  console.log(store.newNavList);
});

export default store;
