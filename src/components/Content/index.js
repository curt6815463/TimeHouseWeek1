import React, { Component } from 'react';
import './index.css';

class Content extends Component {

  constructor(props){
    super(props)
    this.state = {
      events:[],
      saving:false
    }
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps.events);
    this.setState({
      events:JSON.parse(JSON.stringify(nextProps.events))
    })
  }

  handleChange = (index) => (event) => {
    let type = event.target.type
    let events = JSON.parse(JSON.stringify(this.state.events))
    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    let name = event.target.name
    events[index][name] = value
    this.setState({events},() => {
      if(type === 'checkbox'){
        let events = this.props.events
        events[index].complete = !events[index].complete
        this.props.contentCallBack(events)
      }
    })
    // this.emitEvents()
  }

  toggleOpening = (index) => {
    let events = JSON.parse(JSON.stringify(this.state.events))
    events[index].opening = !events[index].opening
    this.setState({events})
    // this.emitEvents()
  }
  cancel = (index) => {
    let events = this.props.events
    events[index].opening = false
    this.props.contentCallBack(events)
  }
  save = (index) => {
    let events = this.state.events
    events[index].opening = false
    this.props.contentCallBack(events)
    // this.forceUpdate()
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
                      <input
                        id={'checkbox' + index}
                        name="complete"
                        checked={event.complete}
                        onChange={this.handleChange(index)}
                        type="checkbox"
                      />
                    </div>
                    <div className="eventTitle">
                      <input
                        name="title"
                        value={event.title}
                        onChange={this.handleChange(index)}
                      />
                    </div>
                    <div className="starIcon">
                      <i className="far fa-star"></i>
                    </div>
                    <div className="pencilIcon" onClick={() => this.toggleOpening(index)}>
                      <i className="fas fa-pencil-alt"></i>
                    </div>
                    {!event.opening &&
                      <div className="stateBlock">
                        <div className="calendarIcon">
                          <i className="far fa-calendar-alt iconPadding"></i>
                        {event.deadlineDate}{event.deadlineTime}
                        </div>
                        <div className="fileIcon">
                          <i className="far fa-file iconPadding"></i>
                        </div>
                        <div className="messageIcon">
                          <i className="far fa-comment-dots iconPadding"></i>
                        </div>
                      </div>
                    }
                  </div>

                  {event.opening &&
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
                              value={event.deadlineDate}
                              onChange={this.handleChange(index)}
                            />
                            <input
                              name="deadlineTime"
                              value={event.deadlineTime}
                              onChange={this.handleChange(index)}
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
                            {event.file}
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
                              value={event.comment}
                              onChange={this.handleChange(index)}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  }

                  {event.opening &&
                    <div className="cardBottonBlock">
                      <div onClick={() => this.cancel(index)} className="cancel">
                        <i className="fas fa-times"></i>
                        <span>Cancel</span>
                      </div>
                      <div onClick={() => this.save(index)} className="save">
                        <i className="fas fa-plus"></i>
                        <span>Save</span>
                      </div>
                    </div>
                  }
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
