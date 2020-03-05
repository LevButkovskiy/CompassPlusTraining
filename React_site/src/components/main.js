
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
      React.createElement(Post, { title: "BMW M340i", image: "https://www.zrkuban.ru/media/P90373270_highRes_the-new-bmw-m340i-xd.jpg" })
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
      data: [1, 2, 3]
    };
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Menu, { data: this.state.data })
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
        this.props.data.map((item, index) => React.createElement(MenuItem, { text: item }))
      )
    );
  }
}

class MenuItem extends React.Component {
  render() {
    return React.createElement(
      "li",
      null,
      React.createElement(
        "a",
        { href: "#" },
        this.props.text
      )
    );
  }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById("post"));

ReactDOM.render(React.createElement(Posts, null), document.getElementById("posts"));

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
