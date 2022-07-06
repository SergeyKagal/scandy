import './App.css';
import React from 'react';
import { ProjectCover } from '../ProjectCover/ProjectCover';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATH } from '../../constants/path';
import Category from '../Category/Category';
import Pdp from '../Pdp/Pdp';
import { getData } from '../../utils/getData';
import { queries } from '../../constants/queries';

class App extends React.Component {
  state = {
    pdpId: '',
    currentCurrency: 0,
    cart: [],
    navList: JSON.parse(localStorage.getItem('navList') || []),
  };

  getNavList = async () => {
    const { categories } = await getData(queries.navList);
    const res = categories.map((item, i) => {
      return { ...item, id: `${i}${item.name}`, path: `/${item.name}` };
    });

    localStorage.setItem('navList', JSON.stringify(res));
    this.setState({
      navList: res,
    });
  };

  setPdpId = (id) => {
    this.setState({ pdpId: id });
  };

  setCurrentCurrency = (currency) => {
    this.setState({ currentCurrency: currency });
  };

  componentDidMount = () => {
    if (this.state.navList.length) {
      this.getNavList();
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={PATH.MAIN} element={<ProjectCover />} />

          {!!this.state.navList.length &&
            this.state.navList.map((item) => (
              <Route
                key={item.id}
                path={item.path}
                element={
                  <Category
                    categoryName={item.name}
                    setPdpId={this.setPdpId}
                    currentCurrency={this.state.currentCurrency}
                    setCurrentCurrency={this.setCurrentCurrency}
                    navList={this.state.navList}
                  />
                }
              />
            ))}

          <Route
            path={PATH.PDP}
            element={
              <Pdp
                pdpId={this.state.pdpId.toString()}
                currentCurrency={this.state.currentCurrency}
                setCurrentCurrency={this.setCurrentCurrency}
                navList={this.state.navList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
