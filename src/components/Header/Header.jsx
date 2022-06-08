import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../constants/path';
import CartButton from './CartButton';
import CurrencySelect from './CurrencySelect';
import './Header.css';
export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-list-item">
              <Link to={PATH.CLOTHES} className="header__nav-link">
                <span>clothes</span>
              </Link>
            </li>
            <li className="header__nav-list-item">
              <Link to={PATH.TECH} className="header__nav-link">
                <span>tech</span>
              </Link>
            </li>
            <li className="header__nav-list-item">
              <Link to={PATH.ALL} className="header__nav-link">
                <span>all</span>
              </Link>
            </li>
          </ul>
          <Link to={PATH.MAIN} className="header__nav-link">
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
