import React from 'react';
import {Container, Row} from 'react-bootstrap';

import Task from './Task'

class Tasks extends React.Component {
  render(){
    return <div className="body">
      <h6>Все задачи</h6>
      <Container>
        <Row>
          {this.props.tasks.map((item, key) => (
              <Task
                key={key}
                task={item}
              />
          ))}
        </Row>
      </Container>
    </div>
  }
}
export default Tasks
