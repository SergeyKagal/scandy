import { toJS } from 'mobx';
import store from '../store';

export const saveCart = () => {
  console.log(JSON.stringify(toJS(store.cart)));
  localStorage.setItem('cart', JSON.stringify(toJS(store.cart)));
};
