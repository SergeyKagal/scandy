import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../constants/path';
import CartButton from './CartButton';
import CurrencySelect from './CurrencySelect';
import PropTypes from 'prop-types';
import './Header.css';

export default class Header extends React.Component {
  state = {
    navList: this.props.navList,
  };

  setActiveNavListItem = (listItemTitle) => {
    const resultList = [...this.state.navList];
    resultList.forEach((listItem) => {
      if (listItemTitle === listItem.name) {
        listItem.navClassName = 'header__nav-link active';
      } else {
        listItem.navClassName = 'header__nav-link';
      }
    });
    this.setState({ navList: resultList });
  };

  componentDidMount = () => {
    this.setActiveNavListItem(this.props.activeTitle);
  };
  render() {
    return (
      <header className="header">
        <nav className="header__nav">
          <ul className="header__nav-list">
            {!!this.state.navList.length &&
              this.state.navList.map((listItem) => {
                return (
                  <li
                    key={listItem.id}
                    className="header__nav-list-item"
                    onClick={() => this.setActiveNavListItem(listItem.name)}
                  >
                    <Link to={listItem.path} className={listItem.navClassName}>
                      <span>{listItem.name}</span>
                    </Link>
                  </li>
                );
              })}
          </ul>
          <Link to={PATH.MAIN} className=" a-logo">
            <img src="./images/a-logo.svg" alt="a-logo" />
          </Link>
          <div className="header__nav-controls">
            <CurrencySelect switchCurrency={this.props.switchCurrency} />
            <CartButton cart={this.props.cart} />
          </div>
        </nav>
      </header>
    );
  }
}
Header.propTypes = {
  activeTitle: PropTypes.string.isRequired,
  switchCurrency: PropTypes.func.isRequired,
  navList: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
};
