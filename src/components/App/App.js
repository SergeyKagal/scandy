import './App.css';
import React from 'react';
import { ProjectCover } from '../ProjectCover/ProjectCover';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATH } from '../../constants/path';
import Category from '../Category/Category';
import Pdp from '../Pdp/Pdp';

class App extends React.Component {
  state = {
    pdpId: '',
    currentCurrency: 0,
    cart: [],
  };

  setPdpId = (id) => {
    this.setState({ pdpId: id });
  };

  setCurrentCurrency = (currency) => {
    this.setState({ currentCurrency: currency });
  };

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={PATH.MAIN} element={<ProjectCover />} />
          <Route
            path={PATH.CLOTHES}
            element={
              <Category
                categoryName="clothes"
                setPdpId={this.setPdpId}
                currentCurrency={this.state.currentCurrency}
                setCurrentCurrency={this.setCurrentCurrency}
              />
            }
          />
          <Route
            path={PATH.TECH}
            element={
              <Category
                categoryName="tech"
                setPdpId={this.setPdpId}
                currentCurrency={this.state.currentCurrency}
                setCurrentCurrency={this.setCurrentCurrency}
              />
            }
          />
          <Route
            path={PATH.ALL}
            element={
              <Category
                categoryName="all"
                setPdpId={this.setPdpId}
                currentCurrency={this.state.currentCurrency}
                setCurrentCurrency={this.setCurrentCurrency}
              />
            }
          />
          <Route
            path={PATH.PDP}
            element={
              <Pdp
                pdpId={this.state.pdpId.toString()}
                currentCurrency={this.state.currentCurrency}
                setCurrentCurrency={this.setCurrentCurrency}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
