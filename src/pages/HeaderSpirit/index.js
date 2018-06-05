import React, { Component } from 'react';
import './index.css';

class HomePage extends Component {
  render() {
    return (
      <header>        
        <ul>
          <li>My Tasks</li>
          <li>In Progress</li>
          <li>Completed</li>
        </ul>
      </header>
    )
  }
}

export default HomePage;
