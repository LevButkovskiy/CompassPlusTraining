import React from 'react';
import { Link } from 'react-router-dom'

class Button extends React.Component {
  render(){
    return <Link to={this.props.href}>
      <a href="/#" id="buttonLink">
          <div className="button" id={this.props.id}>
            <b>{this.props.title}</b>
        </div>
      </a>
    </Link>
  }
}

export default Button
