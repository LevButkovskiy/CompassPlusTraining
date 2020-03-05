
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
      <Post title = "BMW M340i" image="https://www.zrkuban.ru/media/P90373270_highRes_the-new-bmw-m340i-xd.jpg"/>
    </div>
  }
}

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <h4>{this.props.title}</h4>
      <img src={this.props.image} width="200"></img>
      <h5>This is car. BMW M340i. lorem lorem lorem lorem lorem</h5>
    </div>
  }
}

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      data: [1, 2, 3],
    });
  }

  render() {
      return <div>
              <Menu data={this.state.data}></Menu>
      </div>
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <div>
         <ul>
          {this.props.data.map((item, index) => (
             <MenuItem text={item}/>
          ))}
        </ul>
       </div>
    );
  }
}

class MenuItem extends React.Component {
  render() {
    return <li><a href = "#">{this.props.text}</a></li>
  }
}

ReactDOM.render(
  <Content />,
  document.getElementById("post")
);

ReactDOM.render(
  <Posts />,
  document.getElementById("posts")
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
