const DigitalClock = function (props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.time
    )
  );
};

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { counter: 0 };
  }

  handleClick() {
    this.setState({ counter: ++this.state.counter });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Button, { handler: this.handleClick }),
      React.createElement(Text, { counter: this.state.counter })
    );
  }
}

class Button extends React.Component {
  render() {
    return React.createElement(
      "button",
      {
        onClick: this.props.handler },
      "Click Me"
    );
  }
}

class Text extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "already clicked ",
      this.props.counter,
      " times!"
    );
  }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById("content"));

/*
//Перед тем как создаться
componentWillMount(){}
//После того как создан
componentDidMount(){}
//Когда компонент готов получать свойства родителя
componentWillRecieveProps(){}
//Оптимизация рендера компонента
shouldComponentUpdate(){}
//Сразу перед обновлением элемента
componentWillUpdate(){}
//Сразу после обновления
componentDidUpdate(){}

//Выполнятеся перед удалением компонента
componentWillUnmount(){}*/

/*
class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentTime: (new Date()).toLocaleString()
    }
    this.clockLauncher()
  }

  clockLauncher(){
    setInterval(() => {
      this.setState({
        currentTime: (new Date()).toLocaleString()
      })
    }, 1000)
  }

  render () {
    return <div>
      <DigitalClock time={this.state.currentTime}/>
    </div>
  }
}*/
