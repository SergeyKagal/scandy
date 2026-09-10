import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../constants/path';
import CartButton from './CartButton';
import CurrencySelect from './CurrencySelect';
import './Header.css';
import Bag from './Bag';
import store from '../../store';
import { observer } from 'mobx-react';

class Header extends React.PureComponent {
  state = {
    isShowBag: false,
  };

  hideShowBag = () => {
    this.setState({ isShowBag: !this.state.isShowBag });
  };

  renderNavList(navList, currentCategory) {
    return (
      <ul className="header__nav-list">
        {!!navList.length &&
          navList.map((listItem) => {
            return (
              <li
                key={listItem.id}
                className="header__nav-list-item"
                onClick={() => {
                  store.newCurrentCategory = listItem;
                  store.getProductListByCategory(listItem.name);
                }}
              >
                <Link
                  to={listItem.path}
                  className={
                    listItem.id === currentCategory.id
                      ? 'header__nav-link active'
                      : 'header__nav-link'
                  }
                >
                  <span>{listItem.name}</span>
                </Link>
              </li>
            );
          })}
      </ul>
    );
  }

  renderGreenLogo() {
    return (
      <Link
        to={PATH.MAIN}
        className=" a-logo"
        onClick={() => {
          store.newCurrentCategory = {
            name: 'all',
            id: '0all',
            path: '/',
          };
          store.getProductListByCategory('all');
        }}
      >
        <img src="./images/a-logo.svg" alt="a-logo" />
      </Link>
    );
  }

  render() {
    const { navList, currentCategory } = store;
    const { isShowBag } = this.state;

    return (
      <>
        <header className="header">
          <nav className="header__nav">
            {this.renderNavList(navList, currentCategory)}
            {this.renderGreenLogo()}
            <div className="header__nav-controls">
              <CurrencySelect />
              <CartButton
                isShowBag={this.state.isShowBag}
                hideShowBag={this.hideShowBag}
              />
            </div>
          </nav>
          {isShowBag && <Bag hideShowBag={this.hideShowBag} />}
        </header>
      </>
    );
  }
}
export default observer(Header);
