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

  render() {
    return (
      <>
        {' '}
        <header className="header">
          <nav className="header__nav">
            <ul className="header__nav-list">
              {!!store.navList.length &&
                store.navList.map((listItem) => {
                  return (
                    <li
                      key={listItem.id}
                      className="header__nav-list-item"
                      onClick={() => (store.newCurrentCategory = listItem)}
                    >
                      <Link
                        to={listItem.path}
                        className={
                          listItem.id === store.currentCategory.id
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
            <Link
              to={PATH.MAIN}
              className=" a-logo"
              onClick={() =>
                (store.newCurrentCategory = {
                  name: 'all',
                  id: '0all',
                  path: '/',
                })
              }
            >
              <img src="./images/a-logo.svg" alt="a-logo" />
            </Link>
            <div className="header__nav-controls">
              <CurrencySelect />
              <CartButton
                isShowBag={this.state.isShowBag}
                hideShowBag={this.hideShowBag}
              />
            </div>{' '}
          </nav>{' '}
          {this.state.isShowBag && <Bag hideShowBag={this.hideShowBag} />}
        </header>
      </>
    );
  }
}
export default observer(Header);
