import React, { Component } from 'react';
import './index.css';

class AddBlock extends Component {
  render() {
    return (
      <div className="addBlock">
        <div className="plusIcon">
          <i class="fas fa-plus"></i>
        </div>
        <div className="addWording">
          Add Task
        </div>
      </div>
    )
  }
}

export default AddBlock;
