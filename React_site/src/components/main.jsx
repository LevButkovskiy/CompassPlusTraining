const posts = [
  {
    sphere: "Автомобили",
    title: "BMW M340i",
    image: "https://photo2.tinhte.vn/data/attachment-files/2020/01/4878265_bmw-m340i.jpg",
    description: "This is car. BMW M340i",
  },
  {
    sphere: "Программирование",
    title: "Разработка React",
    image: "https://technographx.com/wp-content/uploads/2019/05/Javascript-Frameworks-2019-2.png",
    description: "Язык программирования React + JS + HTML + CSS",
  },
  {
    sphere: "Животные",
    title: "Кошка села и сидитт",
    image: "https://avatars.mds.yandex.net/get-pdb/51720/91e24d4c-b631-4fa2-9ba0-33632a5903a2/s1200",
    description: "Какая-то новость про кошку + тест вертикальных изображений",
  },
];

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Post data={this.props.data}/>
  }
}

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <p className="circle"><h6>&nbsp;{this.props.data.sphere}</h6></p>
      <h4><b>{this.props.data.title}</b></h4>
      <img className="postImage" src={this.props.data.image}></img>
      <h5>{this.props.data.description}</h5>
    </div>
  }
}

class NewsBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      sphere: posts[0].sphere,
      title: posts[0].title,
      image: posts[0].image,
      description: posts[0].description,
    })
  }

  updatePost(sphere, title, image, description) {
    this.setState({
      sphere: sphere,
      title: title,
      image: image,
      description: description
    })
  }

  render() {
    return <div className="form-row">
        <div className="form-group col-9 p-3" id="post">
          <Content data={this.state}/>
        </div>
        <div className="form-group col-3 menu">
          <Menu self={this}></Menu>
        </div>
    </div>
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<ul className="list-group">
          {posts.map((item, index) => (
             <MenuItem data={item} self={this.props.self}/>
          ))}
        </ul>
    );
  }
}

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  updatePost(){
    this.props.self.updatePost(this.props.data.sphere, this.props.data.title, this.props.data.image, this.props.data.description)
  }

  render() {
    return <li className="list-group-item"><a onClick={this.updatePost.bind(this)} href="#">{this.props.data.title}</a></li>
  }
}

ReactDOM.render(
  <NewsBlock />,
  document.getElementsByClassName("newsBlock")[0]
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
