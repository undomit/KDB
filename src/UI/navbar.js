import React from 'react'
import {Link} from 'react-router-dom'
import mainLogo from './img/logo_red.png'
import userImg from './img/user.jpg'
import './css/bootstrap/dist/css/bootstrap.css'

class Navbar extends React.Component {

  render() {
    return (
      <nav id = "nav" className = "navbar navbar-light bg-light">
        <div className = "navbar-brand">
          <Link to = "/">
            <img type = "button" id = "logo" src = {mainLogo} width="50" height="50" className = "d-inline-block align-top" alt=""/>
            <span className = "navbar-text" id = "top-text">Knowledge Database</span>
          </Link>
        </div>
        <div className = "nav-item dropdown">
          <div className = "nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img onClick = {() => alert('log out!')} src = {userImg} width="40" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
          </div>
          <div className = "dropdown-menu" aria-labelledby="navbarDropdown">
            <div className = "dropdown-item">
              Username
            </div>
            <div className = "dropdown-divider"></div>
            <div className = "dropdown-item" href="#">Profile</div>
            <div className = "dropdown-item" href="#">Log out</div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
