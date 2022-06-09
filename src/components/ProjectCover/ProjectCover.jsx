import React from 'react';
import { PATH } from '../../constants/path';
import './ProjectCover.css';
import { Link } from 'react-router-dom';

export class ProjectCover extends React.Component {
  render() {
    return (
      <>
        <div className="cover__wrapper">
          <h1 className="cover__title">Junior Frontend Test Designs</h1>

          <Link to={PATH.ALL}>
            {' '}
            <button>run</button>
          </Link>
        </div>
      </>
    );
  }
}
