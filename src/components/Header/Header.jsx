import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../constants/path';
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
          <Link to={PATH.CATEGORY} className="header__nav-link" />
          <div className="header__nav-controls">
            <select name="" id="" className="header__nav-currensy-select">
              <option value="" defaultValue="usd">
                $
              </option>
              <option value="usd" className="header__nav-currensy-option">
                $ usd
              </option>
              <option value="gbp" className="header__nav-currensy-option">
                gbp
              </option>
              <option value="aud" className="header__nav-currensy-option">
                aud
              </option>
              <option value="jpy" className="header__nav-currensy-option">
                jpy
              </option>
              <option value="rub" className="header__nav-currensy-option">
                rub
              </option>
            </select>
            <button className="header__nav-cart">
              <img src="./images/cart-icon.svg" alt="cart-icon" />
            </button>
          </div>
        </nav>
      </header>
    );
  }
}
