import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Tasks from './Tasks'

class Body extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return <Switch>
      <Route exact path='/' render={(props) => (
          <Tasks tasks={this.props.tasks} />
        )}/>
      <Route exact path='/task' render={(props) => (
          <TaskPage tasks={this.props.tasks} />
        )}/>
    </Switch>
  }
}

class TaskPage extends React.Component {
  render(){
    const id = window.location.search.toString().split('=')[1]
    const task = this.props.tasks[id];
    return <div className="body">
      <h1>{task.title}</h1>
    </div>
  }
}

export default Body;
