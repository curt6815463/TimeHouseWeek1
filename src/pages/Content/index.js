import React, { Component } from 'react';
import './index.css';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="container">
          <div className="eventCard">
            <div className="cardContainer">
              <div className="checkBox">
                <input id="checkBox" type="checkbox"></input>
              </div>
              <div className="eventTitle">Type Something here</div>
              <div className="starIcon">
                <i className="far fa-star"></i>
              </div>
              <div className="pencilIcon">
                <i className="fas fa-pencil-alt"></i>
              </div>
              <div className="stateBlock">
                <div className="calendarIcon">
                  <i class="far fa-calendar-alt iconPadding"></i>
                  5/14
                </div>
                <div className="fileIcon">
                  <i class="far fa-file iconPadding"></i>
                </div>
                <div className="fileIcon">
                  <i class="far fa-comment-dots iconPadding"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Content;
