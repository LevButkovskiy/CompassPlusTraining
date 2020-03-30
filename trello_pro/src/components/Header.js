import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom'

import Button from './Button'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return <Switch>
      <Route exact path='/' component={MainHeader}/>
      <Route path='/task' component={BackHeader}/>
      <Route path='/create' component={BackHeader}/>
    </Switch>
  }
}


class MainHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return <div className="mainHeader">
      <Container fluid>
        <Row>
          <Col md={10}>
            <div>
              <h1>Trello pro</h1>
              <h6>Выберите задачу для редактирования или создайте новую</h6>
            </div>
          </Col>
          <Col>
            <Button title="Создать задачу" id="createTask" href="/create"/>
          </Col>
        </Row>
      </Container>
    </div>
  }
}

class BackHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return <div className="backHeader">
      <Container fluid>
        <Row>
          <Col md={10}>
            <div>
              <h1>Trello pro</h1>
              <h6>Выберите задачу для редактирования или создайте новую</h6>
            </div>
          </Col>
          <Col>
            <Button title="Назад" id="back" href="/"/>
          </Col>
        </Row>
      </Container>
    </div>
  }
}

export default Header
