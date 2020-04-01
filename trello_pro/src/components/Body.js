import React from 'react';
import {Container, Row, Col, Popover, OverlayTrigger} from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom'

import Tasks from './Tasks'
import SubTaskBlock from './SubTaskBlock'
import Button from './Button'
import closeButton from '../images/closeButton.png'

class Body extends React.Component {
  render(){
    return <Switch>
      <Route exact path='/' component={Tasks}/>
      <Route exact path='/task' component={TaskPage}/>
      <Route path='/create' component={CreateTask}/>
    </Switch>
  }
}

class TaskPage extends React.Component {
  constructor(props){
    super(props)
    this.state=({
      id: window.location.search.toString().split('=')[1],
      task: JSON.parse(localStorage.getItem('tasks'))[window.location.search.toString().split('=')[1]]
    })
  }

  addBlock(){
    let text = document.getElementById("addBlockInput").value
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    let subTasks = tasks[this.state.id].subTasks
    let struct = {id:subTasks.length, title: text, items:[]}
    subTasks.push(struct)
    tasks[this.state.id].subTasks = subTasks
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.hidePopover()
    this.reloadData()
  }

  hidePopover(){
    const popoverId = "showPopover"
    document.getElementById(popoverId).click()
  }

  reloadData(){
    this.setState({
      task: JSON.parse(localStorage.getItem('tasks'))[this.state.id]
    })
  }

  render(){
    const popover = (
      <Popover id="showPopover">
        <Popover.Title as="h3">Добавление блока</Popover.Title>
        <Popover.Content>
          <input type="text" id="addBlockInput"></input>
          <button onClick={this.addBlock.bind(this)} >Добавить</button>
        </Popover.Content>
      </Popover>
    );
    return <div className="body">
      <h6>Просмотр задачи</h6>
      <Container>
        <div class="subHeaderBlock">
          <Row>
            <Col md={10}>
              <h2>{this.state.task.title}</h2>
              <h6>{this.state.task.description}</h6>
            </Col>
            <Col>
              <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                  <a href="#" id="buttonLink">
                      <div className="button" id="addBlock">
                        <b>Cоздать блок</b>
                    </div>
                  </a>
              </OverlayTrigger>
            </Col>
          </Row>
        </div>
        <div class="bodyBlock">
          <Row>
              {this.state.task.subTasks.map((item, key) => (
                <SubTaskBlock
                  key={key}
                  taskId={this.state.task.id}
                  subTaskId={item.id}
                  title={item.title}
                  items={item.items}
                />

              ))}
          </Row>
        </div>
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
