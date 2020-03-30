import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { connect } from 'react-redux'
import {
  Link
} from "react-router-dom";

import Header from './components/Header'
import Body from './components/Body'

class App extends React.Component {
  render(){
    return <div className="app">
        <Header/>
        <Body tasks={this.props.tasks}/>
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

export default connect(mapStateToProps)(App);
