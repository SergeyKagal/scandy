import './App.css';
import React from 'react';
// import { ProjectCover } from '../ProjectCover/ProjectCover';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATH } from '../../constants/path';
import Category from '../Category/Category';
import Pdp from '../Pdp/Pdp';
import Cart from '../Cart/Cart';

class App extends React.Component {
  state = {
    pdpId: '',
  };

  setPdpId = (id) => {
    this.setState({ pdpId: id });
  };

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path={PATH.MAIN}
            element={<Category setPdpId={this.setPdpId} />}
          />
          <Route
            path={PATH.PDP}
            element={<Pdp pdpId={this.state.pdpId.toString()} />}
          />
          <Route path={PATH.CART} element={<Cart />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
