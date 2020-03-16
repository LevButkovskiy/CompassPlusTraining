const data = [
  {
    sphere: "Автомобили",
    color: "#0fbcf9",
    news: [
      {
        title: "BMW M340i",
        image: "https://photo2.tinhte.vn/data/attachment-files/2020/01/4878265_bmw-m340i.jpg",
        description: "This is car. BMW M340i",
      },
      {
        title: "VW Polo 2020",
        image: "https://avtonovostidnya.ru/wp-content/uploads/2018/12/Novyy-Volkswagen-Polo.jpeg",
        description: "Теперь поло похож на рапид еще больше",
      },
      {
        title: "Renault Duster",
        image: "https://bezrulya.ru/images/publish/1/5/4266/gallery/renault_duster__2.jpg",
        description: "Абсолютно новый Renault Duster",
      },
    ],
  },
  {
    sphere: "Недвижимость",
    color: "#b71540",
    news: [
      {
        title: "Квартира у моря",
        image: "https://turbo.network/hqroom/image/upload/c_thumb,f_auto,g_faces,h_906,q_90,w_1360/v1550528573/post/d3c81c8f52300ea3cadf1817/1d4db0951a4b7996Ii2E4tuJjZ1muJlW.jpg",
        description: "Квартира там, где нет коронавируса",
      },
      {
        title: "Квартира в горах",
        image: "https://avatars.mds.yandex.net/get-pdb/211794/1504b89e-a2a7-4349-97f2-103535457b02/s1200?webp=false",
        description: "Только сегодня - бесплатно",
      },
      {
        title: "Двухэтажная квартира",
        image: "https://ostrnum.com/wp-content/uploads/2019/11/Interior_Design_Living_room_Sofa_545661_1280x853.jpg",
        description: "Квартира как у Геннадия Букина",
      },
    ],
  },
  {
    sphere: "Фрукты",
    color: "#f6b93b",
    news: [
      {
        title: "Яблоко",
        image: "https://aullyqian.files.wordpress.com/2014/04/apple-side.jpg",
        description: "Это яблоко",
      },
      {
        title: "Мандарин",
        image: "https://avatars.mds.yandex.net/get-zen_doc/1634555/pub_5df499de027a1500b000c6f3_5df49ccb8d5b5f00b0261bae/scale_1200",
        description: "Это мандарин",
      },
      {
        title: "Помидор",
        image: "https://i.sunhome.ru/journal/221/polza-tomatov.orig.jpg",
        description: "Помидор или томат? Это фрукт",
      },
      {
        title: "Киви",
        image: "https://i.pinimg.com/originals/b5/ed/27/b5ed27930f68d86ffebc53e945f082a4.jpg",
        description: "Это - киви",
      },
      {
        title: "Питахайя",
        image: "https://gastritinform.ru/wp-content/uploads/2019/12/mNiArlf4s0M.jpg",
        description: "Еще называют драконий фрукт",
      },
    ],
  },
  {
    sphere: "Сфера 3",
    color: "#78e08f",
    news: [
      {
        title: "BMW M340i",
        image: "https://photo2.tinhte.vn/data/attachment-files/2020/01/4878265_bmw-m340i.jpg",
        description: "This is car. BMW M340i",
      },
      {
        title: "VW Polo 2020",
        image: "https://avtonovostidnya.ru/wp-content/uploads/2018/12/Novyy-Volkswagen-Polo.jpeg",
        description: "Теперь поло похож на рапид еще больше",
      },
      {
        title: "Renault Duster",
        image: "https://bezrulya.ru/images/publish/1/5/4266/gallery/renault_duster__2.jpg",
        description: "Абсолютно новый Renault Duster",
      },
    ],
  },
  {
    sphere: "Сфера 4",
    color: "#78e08f",
    news: [
      {
        title: "BMW M340i",
        image: "https://photo2.tinhte.vn/data/attachment-files/2020/01/4878265_bmw-m340i.jpg",
        description: "This is car. BMW M340i",
      },
      {
        title: "VW Polo 2020",
        image: "https://avtonovostidnya.ru/wp-content/uploads/2018/12/Novyy-Volkswagen-Polo.jpeg",
        description: "Теперь поло похож на рапид еще больше",
      },
      {
        title: "Renault Duster",
        image: "https://bezrulya.ru/images/publish/1/5/4266/gallery/renault_duster__2.jpg",
        description: "Абсолютно новый Renault Duster",
      },
    ],
  },
];

class Container extends React.Component {

  constructor(props) {
    super(props);

    this.state = ({
      sphere: 0,
    })
  }

  updateSphere(sphere){
    this.setState({
      sphere: sphere,
    });
  }

  render() {
    return <div>
      <div className="sphereMenu"><SphereMenu handler={this.updateSphere.bind(this)}/></div>
      <div className="newsBlock"><NewsBlock sphere={this.state.sphere}/></div>
    </div>
  }
}

class SphereMenu extends React.Component {
  constructor(props) {
    super(props);
    console.log(data[0].news.length)
  }

  render() {
    return <ul className="list-inline sphereMenu">
            {data.map((item, index) => (
               <SphereMenuItem color={item.color} title={item.sphere} number={item.news.length} index={index} handler={this.props.handler}/>
            ))}
        </ul>
  }
}

class SphereMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      color: props.color,
      title: props.title,
      number: props.number,
    })
  }

  handleClick(){
    this.props.handler(this.props.index);
  }

  render() {
    return <a onClick={this.handleClick.bind(this)} href="#">
      <li className="list-inline-item sphereItem" style={{backgroundColor: this.state.color}}>
        <span id="sphereTitle"><small><b>{this.state.title}</b></small></span> &nbsp;
        <span className="badge badge-light">{this.state.number}</span>
      </li>
    </a>
  }
}

class NewsBlock extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      sphere: this.props.sphere,
      title: data[this.props.sphere].news[0].title,
      image: data[this.props.sphere].news[0].image,
      description: data[this.props.sphere].news[0].description,
      index: 0,
    });
  }

  componentWillReceiveProps(props){
    this.setState({
      sphere: props.sphere,
      title: data[props.sphere].news[0].title,
      image: data[props.sphere].news[0].image,
      description: data[props.sphere].news[0].description,
      index: 0,
    });
  }

  updatePost(title, image, description, index) {
    this.setState({
      sphere: this.props.sphere,
      title: title,
      image: image,
      description: description,
      index: index
    });
  }

  render() {
    return <div className="form-row">
        <div className="form-group col-9 p-3" id="post">
          <Content data={this.state} sphere={this.state.sphere}/>
        </div>
        <div className="form-group col-3 menu">
          <Menu self={this} sphere={this.state.sphere}></Menu>
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
          {data[this.props.sphere].news.map((item, index) => (
             <MenuItem data={item} index={index} self={this.props.self} sphere={this.props.sphere}/>
          ))}
        </ul>
    );
  }
}

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(){
    this.props.self.updatePost(this.props.data.title, this.props.data.image, this.props.data.description, this.props.index)
  }

  render() {
    return <a onClick={this.handleClick.bind(this)} href="#">
      <li className="list-group-item">{this.props.data.title}</li>
    </a>
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      data: this.props.data,
      sphere: this.props.sphere
    })
  }

  componentWillReceiveProps(props){
    this.setState({
      data: props.data,
      sphere: props.sphere
    });
  }

  render() {
    return <Post data={this.state.data} sphere={this.state.sphere}/>
  }
}

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      color: data[this.props.sphere].color,
      sphere: data[this.props.sphere].sphere,
      title: this.props.data.title,
      description: this.props.data.description,
      image: this.props.data.image,
      loading: false,
    });
  }

  componentWillReceiveProps(props){
    this.calculateMovements(props)
  }

  calculateMovements(props) {
      this.setState({ loading: true});
      setTimeout(function() {
        this.setState({
          color: data[props.sphere].color,
          sphere: data[props.sphere].sphere,
          title: props.data.title,
          description: props.data.description,
          image: props.data.image,
          loading: false,
        });
      }.bind(this), 150);
  }

  render() {
    return <div>
      <Loading hidden = {this.state.loading}/>
      <div style={{display: this.state.loading ? "none": "block"}}>
        <p className="circle c-1" style={{backgroundColor: this.state.color}}><h6>&nbsp;{this.state.sphere}</h6></p>
        <h4><b>{this.state.title}</b></h4>
        <img className="postImage" src={this.state.image}></img>
        <h5>{this.state.description}</h5>
      </div>
    </div>
  }
}

class Loading extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      hidden: props.hidden,
    });
  }

  componentWillReceiveProps(props){
    this.setState({hidden: props.hidden})
  }

  render(){
    return <div style={{display: this.state.hidden ? "block" : "none"}}>
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" style={{width: '2rem', height: '2rem'}} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  }
}

ReactDOM.render(
  <Container />,
  document.getElementsByClassName("container")[0]
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
