import './App.css';
import React from 'react';
import { ProjectCover } from '../ProjectCover/ProjectCover';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ProjectCover />
      </div>
    );
  }
}

export default App;
