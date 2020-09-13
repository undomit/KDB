import React from 'react'
import {Link} from 'react-router-dom'
import {Dropdown, Button, ButtonGroup} from 'react-bootstrap'
import mainLogo from './img/logo_red.png'
import userImg from './img/user.jpg'
import './css/bootstrap/dist/css/bootstrap.css'

class Navbar extends React.Component {

  render() {
    return (
      <nav id = "nav" className = "navbar navbar-light bg-light spaceBottom">
        <div className = "navbar-brand">
          <Link to = "/Main">
            <img type = "button" id = "logo" src = {mainLogo} width="50" height="50" className = "d-inline-block align-top" alt=""/>
            <span className = "navbar-text" id = "top-text">Knowledge Database</span>
          </Link>
        </div>
        <Dropdown as = {ButtonGroup}>
          <Dropdown.Toggle split variant = "light" id = "dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Log Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    );
  }
}

export default Navbar;
