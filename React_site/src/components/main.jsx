
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = {counter: 0, title: ""}
    this.setState({title: this.props.title})
  }

  handleClick() {
    this.setState({counter: ++this.state.counter})
  }

  render() {
    return <div>
      <Post title={this.props.title} image="https://www.zrkuban.ru/media/P90373270_highRes_the-new-bmw-m340i-xd.jpg"/>
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
      data: {
        text: ["r3", "43", "433"]
      },
    });
  }

  render() {
      return <div>
        <Menu data={this.state.data.text} funct={this.props.funct} thif={this.props.thif}></Menu>
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
             <MenuItem text={item} funct={this.props.funct} thif={this.props.thif}/>
          ))}
        </ul>
       </div>
    );
  }
}

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    console.log("I;m here")
  }

  up(){
    console.log("AAA, clicked")
    console.log(this.props.thif)
    this.props.thif.updateImage(this.props.text)
  }
  render() {
    return <li><a onClick={this.up.bind(this)} href="#">{this.props.text}</a></li>
  }
}

class NewsBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      title: "default",
    })
  }

  updateImage(titleText) {
    console.log("OAOAOA")
    console.log(this)
    this.setState({
      title: titleText,
    })
  }
  TODO : Refactoring
  //Delegaete needed here, updateImaee => delegate, after Delegating, set state to Post

  render() {
    return <div className="form-row p-2">
        <div className="form-group p-2">
          <Content title={this.state.title}/>
        </div>
        <div className="form-group p-2">
          <Posts funct={this.updateImage} thif={this}/>
        </div>
    </div>
  }
}


ReactDOM.render(
  <NewsBlock />,
  document.getElementById("newsBlock")
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
