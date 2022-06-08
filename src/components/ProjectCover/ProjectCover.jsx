import React from 'react';
import { PATH } from '../../constants/path';
import './ProjectCover.css';
import { Link } from 'react-router-dom';

export class ProjectCover extends React.Component {
  clickHandler = () => {
    console.log('Click');
  };
  render() {
    return (
      <>
        <div className="cover__wrapper">
          <h1 className="cover__title">Junior Frontend Test Designs</h1>

          <Link to={PATH.CATEGORY}>
            {' '}
            <button onClick={this.clickHandler}>run</button>
          </Link>
        </div>
      </>
    );
  }
}
