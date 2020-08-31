import React from 'react'
import ReactDom from 'react-dom'
import Menu from './UI/menu'
import Navbar from './UI/navbar'
import Jumbotron from './UI/Jumbotron'
import './index.css'

ReactDom.render(
  <Menu />,
  document.getElementById('menu')
)

ReactDom.render(
  <Navbar />,
  document.getElementById('nav')
)

ReactDom.render(
  <Jumbotron />,
  document.getElementById('content')
)
