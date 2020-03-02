const DigitalClock = function (props) {
  return <div><h1>{props.time}</h1></div>
}

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = {counter: 0}
  }

  handleClick() {
    this.setState({counter: ++this.state.counter})
  }

  render() {
    return <div>
      <Button handler={this.handleClick}/>
      <Text counter={this.state.counter}/>
    </div>
  }
}

class Button extends React.Component {
  render() {
    return <button
      onClick={this.props.handler}>
      Click Me</button>
  }
}

class Text extends React.Component {
  render() {
    return <div>
      already clicked {this.props.counter} times!
    </div>
  }
}

ReactDOM.render(
  <Content />,
  document.getElementById("content")
);

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
