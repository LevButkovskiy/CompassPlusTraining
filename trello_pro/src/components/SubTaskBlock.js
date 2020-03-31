import React from 'react';
import {Col, OverlayTrigger, Popover} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class SubTaskBlock extends React.Component {
  onBtnClick(){
    const inputId = "addSubTaskText" + this.props.id
    let text = document.getElementById(inputId).value
    return this.props.updateSubTask(text, this.props.id)
  }

  render(){
    const inputId = "addSubTaskText" + this.props.id
    const popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Добавление подзадачи</Popover.Title>
        <Popover.Content>
          <input type="text" id={inputId}></input>
          <button onClick={this.onBtnClick.bind(this)}>Добавить</button>
        </Popover.Content>
      </Popover>
    );
    return <Col md={4}>
      <div className="subTaskBlock">
            <h6 style={{marginBottom: '10px'}}>{this.props.title}</h6>
            {this.props.items.map((item, key) => (
              <div className="subTask" key={key}>
              {item}
              </div>
            ))}
              <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                <div className="addSubTask">
                    <span className="addSubTaskText">Добавить подзадачу</span>
                </div>
              </OverlayTrigger>
      </div>
    </Col>

  }
}

export default SubTaskBlock
