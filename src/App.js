import React, { Component } from 'react';
import logo from './logo.svg';
import HeaderSpirit from './pages/HeaderSpirit'
import Content from './pages/Content'
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderSpirit></HeaderSpirit>
        <Content></Content>
      </div>
    );
  }
}

export default App;
