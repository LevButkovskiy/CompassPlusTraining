import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { connect } from 'react-redux'

import Header from './components/Header'
import Body from './components/Body'

import addSubTask from './actions/actionAddSubTask'

class App extends React.Component {
  render(){
    return <div className="app">
      <h1>{this.props.user}</h1>
        <Header/>
        <Body
          tasks={this.props.tasks}
          updateSubTask={this.props.addSubTaskFunction}
          />
      </div>
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    user: state.userInfo.user,
    tasks: state.userInfo.data.tasks,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addSubTaskFunction(user, id){
      dispatch(addSubTask(user, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
