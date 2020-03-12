const data = [{
  sphere: "Автомобили",
  color: "#2980b9",
  news: [{
    title: "BMW M340i",
    image: "https://photo2.tinhte.vn/data/attachment-files/2020/01/4878265_bmw-m340i.jpg",
    description: "This is car. BMW M340i",
    liked: "false"
  }, {
    title: "VW Polo 2020",
    image: "https://avtonovostidnya.ru/wp-content/uploads/2018/12/Novyy-Volkswagen-Polo.jpeg",
    description: "Теперь поло похож на рапид еще больше",
    liked: "false"
  }, {
    title: "Renault Duster",
    image: "https://bezrulya.ru/images/publish/1/5/4266/gallery/renault_duster__2.jpg",
    description: "Абсолютно новый Renault Duster",
    liked: "false"
  }]
}, {
  sphere: "Недвижимость",
  color: "#b71540",
  news: [{
    title: "Квартира у моря",
    image: "https://turbo.network/hqroom/image/upload/c_thumb,f_auto,g_faces,h_906,q_90,w_1360/v1550528573/post/d3c81c8f52300ea3cadf1817/1d4db0951a4b7996Ii2E4tuJjZ1muJlW.jpg",
    description: "Квартира там, где нет коронавируса",
    liked: "false"
  }, {
    title: "Квартира в горах",
    image: "https://avatars.mds.yandex.net/get-pdb/211794/1504b89e-a2a7-4349-97f2-103535457b02/s1200?webp=false",
    description: "Только сегодня - бесплатно",
    liked: "false"
  }, {
    title: "Двухэтажная квартира",
    image: "https://ostrnum.com/wp-content/uploads/2019/11/Interior_Design_Living_room_Sofa_545661_1280x853.jpg",
    description: "Квартира как у Геннадия Букина",
    liked: "false"
  }]
}, {
  sphere: "Фрукты",
  color: "#f6b93b",
  news: [{
    title: "Яблоко",
    image: "https://aullyqian.files.wordpress.com/2014/04/apple-side.jpg",
    description: "Это яблоко",
    liked: "false"
  }, {
    title: "Мандарин",
    image: "https://avatars.mds.yandex.net/get-zen_doc/1634555/pub_5df499de027a1500b000c6f3_5df49ccb8d5b5f00b0261bae/scale_1200",
    description: "Это мандарин",
    liked: "false"
  }, {
    title: "Помидор",
    image: "https://i.sunhome.ru/journal/221/polza-tomatov.orig.jpg",
    description: "Помидор или томат? Это фрукт",
    liked: "false"
  }, {
    title: "Киви",
    image: "https://i.pinimg.com/originals/b5/ed/27/b5ed27930f68d86ffebc53e945f082a4.jpg",
    description: "Это - киви",
    liked: "false"
  }]
}, {
  sphere: "Сфера 3",
  color: "#78e08f",
  news: [{
    sphere: "Автомобили53",
    title: "BMW M340i",
    image: "https://photo2.tinhte.vn/data/attachment-files/2020/01/4878265_bmw-m340i.jpg",
    description: "This is car. BMW M340i",
    liked: "false"
  }, {
    sphere: "Автомобили54",
    title: "VW Polo 2020",
    image: "https://avtonovostidnya.ru/wp-content/uploads/2018/12/Novyy-Volkswagen-Polo.jpeg",
    description: "Теперь поло похож на рапид еще больше",
    liked: "false"
  }, {
    sphere: "Автомобили55",
    title: "Renault Duster",
    image: "https://bezrulya.ru/images/publish/1/5/4266/gallery/renault_duster__2.jpg",
    description: "Абсолютно новый Renault Duster",
    liked: "false"
  }]
}, {
  sphere: "Сфера 4"
}];

class Container extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sphere: 0
    };
  }

  updateSphere(sphere) {
    this.setState({
      sphere: sphere
    });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "sphereMenu" },
        React.createElement(SphereMenu, { handler: this.updateSphere.bind(this) })
      ),
      React.createElement(
        "div",
        { className: "newsBlock" },
        React.createElement(NewsBlock, { sphere: this.state.sphere })
      )
    );
  }
}

class SphereMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      "div",
      { className: "form-row sphereMenu" },
      data.map((item, index) => React.createElement(SphereMenuItem, { color: item.color, title: item.sphere, index: index, handler: this.props.handler }))
    );
  }
}

class SphereMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      title: this.props.title
    };
  }

  handleClick() {
    this.props.handler(this.props.index);
  }

  render() {
    return React.createElement(
      "div",
      { className: "form-group sphereItem", style: { backgroundColor: this.state.color } },
      React.createElement(
        "a",
        { onClick: this.handleClick.bind(this), href: "#" },
        React.createElement(
          "small",
          null,
          React.createElement(
            "b",
            null,
            this.state.title
          )
        )
      )
    );
  }
}

class NewsBlock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sphere: this.props.sphere,
      title: data[this.props.sphere].news[0].title,
      image: data[this.props.sphere].news[0].image,
      description: data[this.props.sphere].news[0].description,
      index: 0
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      sphere: props.sphere,
      title: data[props.sphere].news[0].title,
      image: data[props.sphere].news[0].image,
      description: data[props.sphere].news[0].description,
      index: 0
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
    return React.createElement(
      "div",
      { className: "form-row" },
      React.createElement(
        "div",
        { className: "form-group col-9 p-3", id: "post" },
        React.createElement(Content, { data: this.state, sphere: this.state.sphere })
      ),
      React.createElement(
        "div",
        { className: "form-group col-3 menu" },
        React.createElement(Menu, { self: this, sphere: this.state.sphere })
      )
    );
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      "ul",
      { className: "list-group" },
      data[this.props.sphere].news.map((item, index) => React.createElement(MenuItem, { data: item, index: index, self: this.props.self, sphere: this.props.sphere }))
    );
  }
}

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.self.updatePost(this.props.data.title, this.props.data.image, this.props.data.description, this.props.index);
  }

  render() {
    return React.createElement(
      "a",
      { onClick: this.handleClick.bind(this), href: "#" },
      React.createElement(
        "li",
        { className: "list-group-item" },
        this.props.data.title
      )
    );
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      sphere: this.props.sphere
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      data: props.data,
      sphere: props.sphere
    });
  }

  render() {
    return React.createElement(Post, { data: this.state.data, sphere: this.state.sphere });
  }
}

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: data[this.props.sphere].color,
      sphere: data[this.props.sphere].sphere,
      title: this.props.data.title,
      description: this.props.data.description,
      image: this.props.data.image
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      color: data[props.sphere].color,
      sphere: data[props.sphere].sphere,
      title: props.data.title,
      description: props.data.description,
      image: props.data.image
    });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        { className: "circle c-1", style: { backgroundColor: this.state.color } },
        React.createElement(
          "h6",
          null,
          "\xA0",
          this.state.sphere
        )
      ),
      React.createElement(
        "h4",
        null,
        React.createElement(
          "b",
          null,
          this.state.title
        )
      ),
      React.createElement("img", { className: "postImage", src: this.state.image }),
      React.createElement(
        "h5",
        null,
        this.state.description
      )
    );
  }
}

ReactDOM.render(React.createElement(Container, null), document.getElementsByClassName("container")[0]);

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
