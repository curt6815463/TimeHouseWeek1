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
      events:[
        {
          title:"Type Something here",
          complete:false,
          deadlineDate:"",
          deadlineTime:"",
          file:"",
          comment:"",
          important:false,
          opening:true
        }
      ]
    }
  }

  contentCallBack = (events) => {
    this.setState({events})
  }

  render() {
    return (
      <div className="App">
        <HeaderSpirit></HeaderSpirit>
        <AddBlock></AddBlock>
        <Content contentCallBack={this.contentCallBack} events={this.state.events}></Content>

      {this.state.events[0].title}
      </div>
    );
  }
}

export default App;
