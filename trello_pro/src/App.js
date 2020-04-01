import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header'
import Body from './components/Body'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state=({
      user: localStorage.getItem("user")
    })
  }
  render(){
    return <div className="app">
        <Header/>
        <Body/>
      </div>
  }
}
export default App;
