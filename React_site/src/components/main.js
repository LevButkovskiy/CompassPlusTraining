
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { counter: 0, title: "" };
    this.setState({ title: this.props.title });
  }

  handleClick() {
    this.setState({ counter: ++this.state.counter });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Post, { title: this.props.title, image: "https://www.zrkuban.ru/media/P90373270_highRes_the-new-bmw-m340i-xd.jpg" })
    );
  }
}

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h4",
        null,
        this.props.title
      ),
      React.createElement("img", { src: this.props.image, width: "200" }),
      React.createElement(
        "h5",
        null,
        "This is car. BMW M340i. lorem lorem lorem lorem lorem"
      )
    );
  }
}

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        text: ["r3", "43", "433"]
      }
    };
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Menu, { data: this.state.data.text, funct: this.props.funct, thif: this.props.thif })
    );
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "ul",
        null,
        this.props.data.map((item, index) => React.createElement(MenuItem, { text: item, funct: this.props.funct, thif: this.props.thif }))
      )
    );
  }
}

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    console.log("I;m here");
  }

  up() {
    console.log("AAA, clicked");
    console.log(this.props.thif);
    this.props.thif.updateImage(this.props.text);
  }
  render() {
    return React.createElement(
      "li",
      null,
      React.createElement(
        "a",
        { onClick: this.up.bind(this), href: "#" },
        this.props.text
      )
    );
  }
}

class NewsBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "default"
    };
  }

  updateImage(titleText) {
    console.log("OAOAOA");
    console.log(this);
    this.setState({
      title: titleText
    });
  }

  //Delegaete needed here, updateImaee => delegate, after Delegating, set state to Post

  render() {
    return React.createElement(
      "div",
      { className: "form-row p-2" },
      React.createElement(
        "div",
        { className: "form-group p-2" },
        React.createElement(Content, { title: this.state.title })
      ),
      React.createElement(
        "div",
        { className: "form-group p-2" },
        React.createElement(Posts, { funct: this.updateImage, thif: this })
      )
    );
  }
}

ReactDOM.render(React.createElement(NewsBlock, null), document.getElementById("newsBlock"));

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
