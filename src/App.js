import React, { Component } from 'react';
import '@fortawesome/fontawesome'
import '@fortawesome/fontawesome-free-solid'
import '@fortawesome/fontawesome-free-regular'
import '@fortawesome/fontawesome-free-brands'
import HeaderSpirit from './components/HeaderSpirit'
import Content from './components/Content'
import AddBlock from './components/AddBlock'
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderSpirit></HeaderSpirit>
        <AddBlock></AddBlock>
        <Content></Content>
      </div>
    );
  }
}

export default App;
