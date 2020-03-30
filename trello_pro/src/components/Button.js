import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom'

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return <Link to={this.props.href}>
      <a href="#" id="buttonLink" >
          <div className="button" id={this.props.id}>
            <b>{this.props.title}</b>
        </div>
      </a>
    </Link>
  }
}

export default Button
