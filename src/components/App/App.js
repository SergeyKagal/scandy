import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATH } from '../../constants/path';
import Category from '../Category/Category';
import Pdp from '../Pdp/Pdp';
import Cart from '../Cart/Cart';
import { getData } from '../../utils/getData';
import { queries } from '../../constants/queries';
import store from '../../store';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';

class App extends React.Component {
  componentDidMount = async () => {
    const { categories } = await getData(queries.categories);
    store.newProductList = categories;
    console.log(toJS(store.productList));
  };
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {!!store.navList.length &&
            store.navList.map((navListItem) => (
              <Route
                key={navListItem.id}
                path={navListItem.path}
                element={<Category />}
              />
            ))}
          <Route path={PATH.PDP} element={<Pdp />} />
          <Route path={PATH.CART} element={<Cart />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default observer(App);
