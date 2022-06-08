import './App.css';
import React from 'react';
import { ProjectCover } from '../ProjectCover/ProjectCover';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATH } from '../../constants/path';
import Category from '../Category/Category';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={PATH.MAIN} element={<ProjectCover />} />
          <Route path={PATH.CATEGORY} element={<Category />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
