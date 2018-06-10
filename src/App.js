import React, { Component } from 'react';
import '@fortawesome/fontawesome'
import '@fortawesome/fontawesome-free-solid'
import '@fortawesome/fontawesome-free-regular'
import '@fortawesome/fontawesome-free-brands'
import HeaderSpirit from './components/HeaderSpirit'
import Content from './components/Content'
import AddBlock from './components/AddBlock'
import './app.css'
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      events:[]
    }
  }

  contentCallBack = (events) => {
    this.setState({events})
  }

  addBlockCallBack = (event) => {
    let events = this.state.events
    events.push(event)
    this.setState({events})
  }

  render() {
    return (
      <div className="App">
        <HeaderSpirit></HeaderSpirit>
        <AddBlock addBlockCallBack={this.addBlockCallBack}></AddBlock>
        <Content contentCallBack={this.contentCallBack} events={this.state.events}></Content>


      </div>
    );
  }
}

export default App;
