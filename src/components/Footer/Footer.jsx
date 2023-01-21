import React, { Component } from 'react';
import './Footer.css';

export default class footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer__links-wrapper">
          <a
            className="footer__link"
            href="https://www.notion.so/Entry-React-developer-TEST-39f601f8aa3f48ac88c4a8fefda304c1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scandiweb junior test
          </a>
          <a className="footer__link"
            href="https://github.com/SergeyKagal/scandy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sergey Kagal`s solution repo
          </a>
        </div>
      </footer>
    );
  }
}
