import React, { Component } from 'react';
import '@fortawesome/fontawesome'
import '@fortawesome/fontawesome-free-solid'
import '@fortawesome/fontawesome-free-regular'
import '@fortawesome/fontawesome-free-brands'
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
