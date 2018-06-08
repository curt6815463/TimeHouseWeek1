import React, { Component } from 'react';
import './index.css';

class Content extends Component {

  constructor(props){
    super(props)
    this.state = {
      title:"Type Something here",
      events:[1,2,3,4,5]
    }
  }

  render() {
    return (
      <div className="content">
        <div className="container">
          {
            this.state.events.map((event) => {
              return(
                <div key={event} className="eventCard">
                  <div className="cardContainer">
                    <div className="checkBox">
                      <input id="checkBox" type="checkbox"></input>
                    </div>
                    <div className="eventTitle">
                      <label htmlFor="checkBox">{this.state.title}</label>
                    </div>
                    <div className="starIcon">
                      <i className="far fa-star"></i>
                    </div>
                    <div className="pencilIcon">
                      <i className="fas fa-pencil-alt"></i>
                    </div>
                    <div className="stateBlock">
                      <div className="calendarIcon">
                        <i className="far fa-calendar-alt iconPadding"></i>
                        5/14
                      </div>
                      <div className="fileIcon">
                        <i className="far fa-file iconPadding"></i>
                      </div>
                      <div className="messageIcon">
                        <i className="far fa-comment-dots iconPadding"></i>
                      </div>
                    </div>
                  </div>
                  <div className="cardDetailContainer">
                    <div className="detail-block">
                      <div className="icon">
                        <i className="far fa-calendar-alt"></i>
                      </div>
                      <div className="deadline">

                      </div>
                    </div>
                    <div className="detail-block file">
                      <div className="icon">
                        <i className="far fa-file"></i>
                      </div>
                      <div className="file">

                      </div>
                    </div>
                    <div className="detail-block comment">
                      <div className="icon">
                        <i className="far fa-comment-dots"></i>
                      </div>
                      <div className="comment">

                      </div>
                    </div>
                  </div>
                </div>

              )
            })
          }

        </div>
      </div>
    )
  }
}

export default Content;
