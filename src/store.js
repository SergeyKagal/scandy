import { autorun, makeAutoObservable } from 'mobx';
import { toJS } from 'mobx';
import { PATH } from './constants/path';
import { queries } from './constants/queries';
import { getData } from './utils/getData';

class Store {
  // currency

  currentCurrency =
    JSON.parse(localStorage.getItem('store')).currentCurrency || 0;

  currentCurrencySymbol =
    JSON.parse(localStorage.getItem('store')).currentCurrencySymbol || '$';

  currencyList = JSON.parse(localStorage.getItem('store')).currencyList || [];

  isShowCurrencyList = false;

  showHideCurrencyList() {
    this.isShowCurrencyList = !this.isShowCurrencyList;
  }

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
      if (i !== store.currentCurrency) {
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

  // cart

  cart = JSON.parse(localStorage.getItem('store')).cart || [];
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
                cartItem.product.qty === 0 && actionPayload === -1
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

  zeroQtyRemove() {
    this.cart = this.cart.filter((item) => {
      return item.product.qty;
    });
  }

  // nav list

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

  // product

  productList = [];
  set newProductList(list) {
    this.productList = list;
  }

  async getProductListByCategory(categoryName) {
    const { category } = await getData(queries.products(categoryName));
    this.newProductList = category.products;
  }

  currentProduct =
    JSON.parse(localStorage.getItem('store')).currentProduct || {};

  get currentProductImages() {
    return this.currentProduct.gallery.map((image, i) => {
      return { id: `${i}`, imageUrl: image, isCurrent: i ? false : true };
    });
  }

  get currentProductAttributes() {
    return this.currentProduct.attributes ? this.currentProduct.attributes : [];
  }

  updateCurrentProduct(product) {
    this.currentProduct = product;
  }

  productAttributesHandler(attribute, attributeItem) {
    this.currentProduct = {
      ...this.currentProduct,
      attributes: [
        ...this.currentProduct.attributes.map((element) => {
          if (element.id !== attribute.id) {
            return element;
          } else {
            return {
              ...element,
              items: [...element.items].map((item) => {
                if (item.id !== attributeItem.id) {
                  return { ...item, isChecked: false };
                } else {
                  return { ...item, isChecked: true };
                }
              }),
            };
          }
        }),
      ],
    };
  }

  async getProductFromBE(productID) {
    this.updateCurrentProduct({});
    const { product } = await getData(queries.pdp(productID));
    product.attributes = product.attributes.map((attribute) => {
      return {
        ...attribute,
        items: attribute.items.map((item) => {
          return { ...item, isChecked: false };
        }),
      };
    });
    this.updateCurrentProduct(product);
    localStorage.setItem(
      'currentProduct',
      JSON.stringify(toJS(store.currentProduct))
    );
  }

  addProductFromPLP() {
    if (this.currentProduct) {
      this.currentProduct.isFromPLP = true;
    }
    if (this.currentProduct.attributes) {
      this.currentProduct.attributes.forEach((attribute) => {
        attribute.items.forEach((item, i) => {
          if (!i) {
            item.isChecked = true;
          }
        });
      });
    }
  }

  constructor() {
    makeAutoObservable(this);
  }
}

const store = new Store();

autorun(async () => {
  await store.getCurrencies();
  const { categories } = await getData(queries.navList);
  store.newNavList = categories.map((item, i) => {
    return {
      ...item,
      id: `${i}${item.name}`,
      path: item.name === 'all' ? PATH.MAIN : `/${item.name}`,
    };
  });
  store.newCurrentCategory =
    JSON.parse(localStorage.getItem('store')).currentCategory ||
    store.navList[0];
});

export default store;
