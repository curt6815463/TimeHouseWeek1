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
      events:[],
      tempEvents:[]
    }
  }

  contentCallBack = (events) => {
    this.setState({events,tempEvents:events})
  }

  addBlockCallBack = (event) => {
    let events = this.state.events
    events.push(event)
    this.setState({events,tempEvents:events})
  }
  filterEvents = (state) => {
    let filterResult = this.state.tempEvents.filter((event) => {
      if(state === 'all') return true
      if(state === 'notComplete' && event.complete === false) return true
      if(state === 'complete' && event.complete === true) return true
    })
    this.setState({events:filterResult})
  }
  render() {
    return (
      <div className="App">
        <header>
          <ul>
            <li onClick={() => this.filterEvents('all')}>My Tasks</li>
            <li onClick={() => this.filterEvents('notComplete')}>In Progress</li>
            <li onClick={() => this.filterEvents('complete')}>Completed</li>
          </ul>
        </header>
        {/* <HeaderSpirit></HeaderSpirit> */}
        <AddBlock addBlockCallBack={this.addBlockCallBack}></AddBlock>
        <Content contentCallBack={this.contentCallBack} events={this.state.events}></Content>


      </div>
    );
  }
}

export default App;
