import React from 'react';
import {Container, Row} from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom'

import Tasks from './Tasks'
import SubTaskBlock from './SubTaskBlock'

class Body extends React.Component {
  render(){
    return <Switch>
      <Route exact path='/' render={(props) => (
          <Tasks tasks={this.props.tasks} />
        )}/>
      <Route exact path='/task' render={(props) => (
          <TaskPage tasks={this.props.tasks} updateSubTask={this.props.updateSubTask}/>
        )}/>
        <Route path='/create' render={(props) => (
          <CreateTask/>
        )}/>
    </Switch>
  }
}

class TaskPage extends React.Component {
  render(){
    const id = window.location.search.toString().split('=')[1]
    const task = this.props.tasks[id];
    return <div className="body">
      <h6>Просмотр задачи</h6>
      <Container>
        <h2>{task.title}</h2>
        <h6>{task.description}</h6>
        <Row>
            {task.subTasks.map((item, key) => (
              <SubTaskBlock
                key={key}
                id={item.id}
                title={item.title}
                items={item.items}
                updateSubTask={this.props.updateSubTask}
              />
            ))}
        </Row>
      </Container>
    </div>
  }
}

class CreateTask extends React.Component {
  render(){
    return <div className="body">
      <h6>Создание задачи</h6>
      <Container>
      </Container>
    </div>
  }
}

export default Body;
