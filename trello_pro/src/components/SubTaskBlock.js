import React from 'react';
import {Col, OverlayTrigger, Popover} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import closeButton from '../images/closeButton.png'
class SubTaskBlock extends React.Component {
  constructor(props){
    super(props)
    this.deleteSubTask = this.deleteSubTask.bind(this)

    this.state=({
      items: props.items
    })
  }

  addSubTask(){
    this.hidePopover()
    const inputId = "addSubTaskText" + this.props.subTaskId
    let text = document.getElementById(inputId).value
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    let subTask = tasks[this.props.taskId].subTasks[this.props.subTaskId]
    subTask.items.push(text)
    tasks[this.props.taskId].subTasks[this.props.subTaskId] = subTask
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.reloadData()
  }

  hidePopover(){
    const popoverId = "showPopover" + this.props.subTaskId
    document.getElementById(popoverId).click()
  }

  deleteSubTask(event){
    if(event.target.id != ""){
      console.log("subtask: " + event.target.id + " deleted")
      let tasks = JSON.parse(localStorage.getItem('tasks'))
      let subTask = tasks[this.props.taskId].subTasks[this.props.subTaskId]
      subTask.items.splice(event.target.id, 1)
      tasks[this.props.taskId].subTasks[this.props.subTaskId] = subTask
      localStorage.setItem('tasks', JSON.stringify(tasks));
      this.reloadData()
    }
    else{
      alert("Элемент все еще записывается в базу, попробуйте позднее")
    }
  }

  reloadData(){
    this.setState({
      items: JSON.parse(localStorage.getItem('tasks'))[this.props.taskId].subTasks[this.props.subTaskId].items
    })
  }

  render(){
    const inputId = "addSubTaskText" + this.props.subTaskId
    const popoverId = "showPopover" + this.props.subTaskId
    const popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Добавление подзадачи</Popover.Title>
        <Popover.Content>
          <input type="text" id={inputId}></input>
          <button onClick={this.addSubTask.bind(this)}>Добавить</button>
        </Popover.Content>
      </Popover>
    );

    return <Col md={4}>
      <div className="subTaskBlock">
        <h6 style={{marginBottom: '10px'}}>{this.props.title}</h6>
        {this.state.items.map((item, key) => (
          <div className="subTask" key={key}>
            {item}
            <button class="deleteButton" onClick={this.deleteSubTask}>
              <img class="deleteButtonImg" id={key} src={closeButton}/>
            </button>
          </div>
        ))}
          <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <div className="addSubTask">
                <span className="addSubTaskText" id={popoverId}>Добавить подзадачу</span>
            </div>
          </OverlayTrigger>
      </div>
    </Col>

  }
}

export default SubTaskBlock
