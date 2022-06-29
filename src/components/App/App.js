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
  };

  setPdpId = (id) => {
    this.setState({ pdpId: id });
  };

  setCurrentCurrency = (currency) => {
    switch (currency) {
      case 'currency-USD':
        this.setState({ currentCurrency: 0 });
        break;
      case 'currency-GBP':
        this.setState({ currentCurrency: 1 });
        break;
      case 'currency-AUD':
        this.setState({ currentCurrency: 2 });
        break;
      case 'currency-JPY':
        this.setState({ currentCurrency: 3 });
        break;
      case 'currency-RUB':
        this.setState({ currentCurrency: 4 });
        break;
      default:
        this.setState({ currentCurrency: 0 });
        break;
    }
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
