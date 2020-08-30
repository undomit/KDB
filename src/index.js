import React from 'react'
import ReactDom from 'react-dom'
import './css/bootstrap/dist/css/bootstrap.css'
import './css/index.css'
import mainLogo from './img/logo_red.png'
import userImg from './img/user.jpg'

class List extends React.Component {
  render() {
    return (
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Created</th>
            <th scope="col">Updated</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Technology</td>
            <td>May 22, 2017 12:37</td>
            <td>May 22, 2017 12:37</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>IIG Procedures</td>
            <td>May 22, 2017 12:37</td>
            <td>May 22, 2017 12:37</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>General Product Knowledge</td>
            <td>May 22, 2017 12:37</td>
            <td>May 22, 2017 12:37</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class Navbar extends React.Component {

  render() {
    return (
      <nav id = "nav" class="navbar navbar-light bg-light">
        <a class="navbar-brand">
          <img type = "button" id = "logo" src = {mainLogo} width="50" height="50" class="d-inline-block align-top" alt="">
          </img>
          <span class= "navbar-text" id = "top-text">Knowledge Database</span>
        </a>
        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src = {userImg} width="40" height="30" class="d-inline-block align-top" alt="" loading="lazy">
            </img>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <div class = "dropdown-item">
              Username
            </div>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Profile</a>
            <a class="dropdown-item" href="#">Log out</a>
          </div>
        </div>
      </nav>
    );
  }
}

class Jumbotron extends React.Component {
  render () {
    return (
      <div class="jumbotron">
        <h1 class="display-4">Knowledge is power</h1>
        <p class="lead">Explore internal know-how and/or contribute. Let's do this together!</p>
        <hr class="my-4"></hr>
        <p>Some other text</p>
        <a class="btn btn-primary btn-lg" role="button">Browse</a>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button type = "button"
              className = {this.props.class}
              onClick = {this.props.clickMe}
      >
        {this.props.value}
      </button>
    )
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    let valueList = ["Categories", "Carriers", "Issue List", "Browse Know-How", "User Management"];
    let classList = ["list-group-item list-group-item-action", "list-group-item list-group-item-action",
     "list-group-item list-group-item-action", "list-group-item list-group-item-action",
      "list-group-item list-group-item-action", "list-group-item list-group-item-action"];
    this.state = {
      values: valueList,
      classes: classList,
    }
  }

  handleClick(i) {
    let classList = ["list-group-item list-group-item-action", "list-group-item list-group-item-action",
     "list-group-item list-group-item-action", "list-group-item list-group-item-action",
      "list-group-item list-group-item-action", "list-group-item list-group-item-action"];
    classList[i] = "list-group-item list-group-item-action active";
    this.setState({
      classes: classList,
    })
    ReactDom.render(
      <List />,
      document.getElementById("dashboard")
    )

  }

  renderButtons(valueList, classList) {
    let elements = [];
    for (let i = 0; i < valueList.length; i++) {
      elements.push(<Button key = {i}
                            value = {valueList[i]}
                            class = {classList[i]}
                            clickMe = {this.handleClick.bind(this, i)}
                    />)
    }
    return elements
  }

  render() {
    return (
        this.renderButtons(this.state.values, this.state.classes)
    );
  }
}

ReactDom.render(
  <Menu />,
  document.getElementById('menu')
)

ReactDom.render(
  <Navbar />,
  document.getElementById('nav')
)
