import React, { Component } from 'react';
import './index.css';

class Content extends Component {
  render() {
    return (
      <div class="content">
        <div class="container">
          <div class="eventCard">
            <div class="cardContainer">
              <div>
                <input id="checkBox" type="checkbox"></input>
              </div>
              <div class="eventTitle">Type Something here</div>
              <div>
                <img></img>
              </div>
              <div>
                <img></img>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Content;
