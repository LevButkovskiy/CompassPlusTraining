import React from 'react';
import {Col} from 'react-bootstrap';
import { Link } from 'react-router-dom'

class Task extends React.Component {
  render(){
    const href = "/task?id=" + this.props.task.id;

    return <Col md={4}>
        <Link to={href}>
          <a href="/edit.html" id="taskLink">
            <div className="taskBlock">
              <img alt="taskImage" src="https://pbs.twimg.com/media/EJbgeutXUAAJ5ou.jpg:large" className="taskImage"/>
              <div className="p-2">
                <span className="taskTitle">{this.props.task.title}</span><br />
                <div className="descriptionBlock">
                  <span className="taskDescription">{this.props.task.description}</span>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </Col>
  }
}

export default Task
