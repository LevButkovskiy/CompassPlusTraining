import React from 'react';
import './App.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Form, ListGroup} from 'react-bootstrap';
import {Badge} from 'react-bootstrap';
import data from './data/data.js'
function App() {
  return (<div>
      <NavigationBar />
      <Body />
    </div>
  );
}

class NavigationBar extends React.Component{
  render() {
    return <div>
      <Navbar className="navbar" expand="lg">
        <Navbar.Brand variant="dark" href="#"><span style={{color: "white"}}>News Site</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarText">
          <ul className="navbar-nav mr-auto">
          </ul>
          <span style={{color: "white"}}>Новостной лендинг о новостях за день</span>
        </Navbar.Collapse>
      </Navbar>
    </div>
  }
}

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      sphere: 0,
    })
  }

  updateSphere(sphere){
    console.log(sphere)
    this.setState({
      sphere: sphere,
    });
  }

  render() {
    return <div>
      <InfoBlock />
      <div className="container p-2">
        <SphereMenu handler={this.updateSphere.bind(this)}/>
        <NewsBlock className="newsBlock" sphere={this.state.sphere}/>
      </div>
    </div>
  }
}

class SphereMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ul className="sphereMenu list-inline">
        {data.map((item, index) => (
          <SphereMenuItem
            color={item.color}
            title={item.sphere}
            number={item.news.length}
            index={index}
            handler={this.props.handler}
            key={index}
          />
        ))}
      </ul>
  }
}

class SphereMenuItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = ({
      color: props.color,
      title: props.title,
      number: props.number,
    })
  }

  handleClick(){
    console.log(this.props.index)
    this.props.handler(this.props.index);
  }

  render() {
    return <a onClick={this.handleClick.bind(this)} href="#">
      <li className="list-inline-item sphereItem animation colorBorder">
        <div className="circle c-1" style={{backgroundColor: this.state.color}}></div>
        <span><small><b>{this.props.title}&nbsp;</b></small></span>
        <Badge variant="dark">{this.props.number}</Badge>
      </li>
    </a>
  }
}

class NewsBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      sphere: this.props.sphere,
      title: data[this.props.sphere].news[0].title,
      image: data[this.props.sphere].news[0].image,
      description: data[this.props.sphere].news[0].description,
      index: 0,
    });
  }

  componentWillReceiveProps(props){
    this.setState({
      sphere: props.sphere,
      title: data[props.sphere].news[0].title,
      image: data[props.sphere].news[0].image,
      description: data[props.sphere].news[0].description,
      index: 0,
    });
  }

  updatePost(title, image, description, index) {
    this.setState({
      sphere: this.props.sphere,
      title: title,
      image: image,
      description: description,
      index: index
    });
  }

  render() {
    return <Form.Row>
      <Form.Group className="col-9 p-3 post">
        <Content data={this.state} sphere={this.state.sphere}/>
      </Form.Group>
      <Form.Group className="col-3 menu">
        <Menu self={this} sphere={this.state.sphere}></Menu>
      </Form.Group>
    </Form.Row>
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      data: this.props.data,
      sphere: this.props.sphere
    })
  }

  componentWillReceiveProps(props){
    this.setState({
      data: props.data,
      sphere: props.sphere
    });
  }

  render() {
    return <Post
      data={this.state.data}
      sphere={this.state.data.sphere}
      />
  }
}

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      color: data[this.props.sphere].color,
      sphere: data[this.props.sphere].sphere,
      title: this.props.data.title,
      description: this.props.data.description,
      image: this.props.data.image,
      loading: false,
    });
  }

  componentWillReceiveProps(props){
    this.calculateMovements(props)
  }

  calculateMovements(props) {
    this.setState({ loading: true});
    setTimeout(function() {
      this.setState({
        color: data[props.sphere].color,
        sphere: data[props.sphere].sphere,
        title: props.data.title,
        description: props.data.description,
        image: props.data.image,
        loading: false,
      });
    }.bind(this), 150);
  }

  render() {
    return <div>
      <Loading hidden = {this.state.loading}/>
      <div style={{display: this.state.loading ? "none": "block"}}>
        <b>{this.state.sphere}</b>
        <h4>{this.state.title}</h4>
        <img className="postImage animation" src={this.state.image}></img>
        <h5>{this.state.description}</h5>
      </div>
    </div>
  }
}

class Loading extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      hidden: props.hidden,
    });
  }

  componentWillReceiveProps(props){
    this.setState({hidden: props.hidden})
  }

  render(){
    return <div style={{display: this.state.hidden ? "block" : "none"}}>
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" style={{width: '2rem', height: '2rem'}} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<ListGroup>
          {data[this.props.sphere].news.map((item, key) => (
            <MenuItem
               data={item}
               index={key}
               self={this.props.self}
               sphere={this.props.sphere}
               key={key}
            />
          ))}
        </ListGroup>
    );
  }
}

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(){
    this.props.self.updatePost(this.props.data.title, this.props.data.image, this.props.data.description, this.props.index)
  }

  render() {
    return <div class="menuItem animation colorBorder" id="bottomBorder"><a>
      <b><ListGroup.Item
        onClick={this.handleClick.bind(this)}
        style={{background: "none", border: "none"}}
        className="list-group-item">{this.props.data.title}
      </ListGroup.Item></b></a>
    </div>
  }
}

class InfoBlock extends React.Component {
  render() {
    return <div className="content-fluid m-3">
        <h4>Главное за сегодня <Badge variant="info">New</Badge></h4>
        <hr/>
    </div>
  }
}

export default App;
