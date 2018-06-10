import React, { Component } from 'react';
import './index.css';

class AddBlock extends Component {

  constructor(props){
    super(props)
    this.state = {
      adding:false,
      eventData:{
          title:"Type Something here",
          complete:false,
          deadlineDate:"",
          deadlineTime:"",
          file:"",
          comment:"",
          important:false,
          opening:true
      }
    }
  }

  handleChange = () => (event) => {
    let eventData = this.state.eventData
    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    let name = event.target.name
    eventData[name] = value
    this.setState({eventData})
    // this.emitEvents()
  }
  toggleAdding = () => {
    let adding = !this.state.adding
    this.setState({adding})
  }
  render() {
    return (
      <div>
        <div className="addBlock">

          {!this.state.adding &&
            <div className="plusIcon">
              <i className="fas fa-plus"></i>
            </div>
          }
          
          {!this.state.adding &&
            <div
              onClick={this.toggleAdding}
              className="addWording">
              Add Task
            </div>
          }

          {this.state.adding &&
            <div className="eventCard">
              <div className="cardContainer">
                <div className="checkBox">
                  <input
                    name="complete"
                    checked={this.state.eventData.complete}
                    onChange={this.handleChange()}
                    type="checkbox"
                  />
                </div>
                <div className="eventTitle">
                  <input
                    name="title"
                    value={this.state.eventData.title}
                    onChange={this.handleChange()}
                  />
                </div>
                <div className="starIcon">
                  <i className="far fa-star"></i>
                </div>
                <div className="pencilIcon">
                  <i className="fas fa-pencil-alt"></i>
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
                      <input
                        name="deadlineDate"
                        value={this.state.eventData.deadlineDate}
                        onChange={this.handleChange()}
                      />
                      <input
                        name="deadlineTime"
                        value={this.state.eventData.deadlineTime}
                        onChange={this.handleChange()}
                      />
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
                      {this.state.eventData.file}
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
                      <textarea
                        name="comment"
                        value={this.state.eventData.comment}
                        onChange={this.handleChange()}
                      ></textarea>
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
          }




        </div>


      </div>
    )
  }
}

export default AddBlock;
