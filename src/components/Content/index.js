import React, { Component } from 'react';
import './index.css';

class Content extends Component {

  constructor(props){
    super(props)
    this.state = {
      title:"Type Something here",
      // event:[1,2,3,4,5],
      events:[
        {
          complete:true,
          deadline:{
            date:"",
            time:''
          },
          file:"",
          comment:"",
          important:false
        },
        {
          complete:false,
          deadline:{
            date:"",
            time:''
          },
          file:"",
          comment:"",
          important:false
        }
      ]
    }
  }

  handleChange = (id) => (event) => {
    
  }
  render() {
    return (
      <div className="content">
        <div className="container">
          {
            this.state.events.map((event,index) => {
              return(
                <div key={index} className="eventCard">
                  <div className="cardContainer">
                    <div className="checkBox">
                      <input id={'checkbox' + index} value={event.complete} onChange={this.handleChange(index)} type="checkbox"></input>
                    </div>
                    <div className="eventTitle">
                      <label htmlFor={'checkbox' + index}>{this.state.title}</label>
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
                    <div className="detail-block calendar">
                      <div className="icon">
                        <i className="far fa-calendar-alt"></i>
                      </div>
                      <div className="deadline">
                        <div className="wording">
                          Deadline
                        </div>
                        <div className="calendarInputBlock">
                          <input></input>
                          <input></input>
                        </div>

                      </div>
                    </div>
                    <div className="detail-block file">
                      <div className="icon">
                        <i className="far fa-file"></i>
                      </div>
                      <div className="file">
                        <div className="wording">
                          File
                        </div>
                        <div className="addFileIcon">
                          <i className="fas fa-plus-square"></i>
                        </div>
                      </div>
                    </div>
                    <div className="detail-block comment">
                      <div className="icon">
                        <i className="far fa-comment-dots"></i>
                      </div>
                      <div className="comment">
                        <div className="wording">
                          Comment
                        </div>
                        <div className="commentInput">
                          <textarea></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cardBottonBlock">
                    <div className="cancel">
                      <i className="fas fa-times"></i>
                      <span>Cancel</span>
                    </div>
                    <div className="save">
                      <i className="fas fa-plus"></i>
                      <span>Save</span>
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
