const data = [
  {
    sphere: "Автомобили",
    color: "#2980b9",
    news: [
      {
        sphere: "Автомобили",
        title: "BMW M340i",
        image: "https://photo2.tinhte.vn/data/attachment-files/2020/01/4878265_bmw-m340i.jpg",
        description: "This is car. BMW M340i",
        liked: "false",
      },
      {
        sphere: "Автомобили",
        title: "VW Polo 2020",
        image: "https://avtonovostidnya.ru/wp-content/uploads/2018/12/Novyy-Volkswagen-Polo.jpeg",
        description: "Теперь поло похож на рапид еще больше",
        liked: "false",
      },
      {
        sphere: "Автомобили",
        title: "Renault Duster",
        image: "https://bezrulya.ru/images/publish/1/5/4266/gallery/renault_duster__2.jpg",
        description: "Абсолютно новый Renault Duster",
        liked: "false",
      },
    ],
  },
  {
    sphere: "Доп. тест",
    color: "#b71540",
  },
  {
    sphere: "СФера 2",
    color: "#f6b93b",
  },
  {
    sphere: "Сфера 3",
    color: "#78e08f"
  },
  {
    sphere: "Сфера 4"
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
      <p className="circle c-1"><h6>&nbsp;{this.props.data.sphere}</h6></p>
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
      sphere: data[0].news[0].sphere,
      title: data[0].news[0].title,
      image: data[0].news[0].image,
      description: data[0].news[0].description,
    })
  }

  updatePost(sphere, title, image, description) {
    this.setState({
      sphere: sphere,
      title: title,
      image: image,
      description: description,
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
          {data[0].news.map((item, index) => (
             <MenuItem data={item} index={index} self={this.props.self}/>
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
    return <a onClick={this.updatePost.bind(this)} href="#"><li className="list-group-item">{this.props.data.title}</li></a>
  }
}

class SpherePicker extends React.Component {
  render() {
    return <SphereMenu />
  }
}

class SphereMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="form-row sphereMenu">
          {data.map((item, index) => (
             <SphereMenuItem color = {item.color} title={item.sphere} index={index}/>
          ))}
        </div>
    );
  }
}

class SphereMenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="form-group sphereItem" style={{backgroundColor: this.props.color}}><a href="#"><small><b>{this.props.title}</b></small></a></div>
  }
}

ReactDOM.render(
  <NewsBlock />,
  document.getElementsByClassName("newsBlock")[0]
);

ReactDOM.render(
  <SpherePicker />,
  document.getElementsByClassName("spherePicker")[0]
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
