import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../constants/path';
import CartButton from './CartButton';
import CurrencySelect from './CurrencySelect';
import './Header.css';
export default class Header extends React.Component {
  state = {
    navList: [
      {
        id: 1,
        title: 'clothes',
        link: PATH.CLOTHES,
      },
      {
        id: 2,
        title: 'tech',
        link: PATH.TECH,
      },
      {
        id: 3,
        title: 'all',
        link: PATH.ALL,
      },
    ],
  };
  render() {
    return (
      <header className="header">
        <nav className="header__nav">
          <ul className="header__nav-list">
            {this.state.navList.map((listItem) => {
              return (
                <li key={listItem.id} className="header__nav-list-item">
                  <Link to={listItem.link} className="header__nav-link">
                    <span>{listItem.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link to={PATH.MAIN} className=" a-logo">
            <img src="./images/a-logo.svg" alt="a-logo" />
          </Link>
          <div className="header__nav-controls">
            <CurrencySelect />
            <CartButton />
          </div>
        </nav>
      </header>
    );
  }
}
