import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATH } from '../../constants/path';
import Category from '../Category/Category';
import Pdp from '../Pdp/Pdp';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import store from '../../store';
import { observer } from 'mobx-react';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            {!!store.navList.length &&
              store.navList.map((navListItem) => (
                <Route
                  key={navListItem.id}
                  path={navListItem.path}
                  element={<Category />}
                />
              ))}
            <Route path={PATH.MAIN} element={<Category />} />
            <Route path={PATH.PDP} element={<Pdp />} />
            <Route path={PATH.CART} element={<Cart />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </>
    );
  }
}

export default observer(App);
