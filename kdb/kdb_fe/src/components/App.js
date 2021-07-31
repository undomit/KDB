import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Login from './User/Login'
import Main from './UI/Main'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(username, password) {
    let url = 'http://localhost:8000/api/login/';

    let credentials = {
      username: username,
      password: password
    };
    
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(response => {
      if (response.status >= 400) {
        throw new Error()
      }
    })
    .then((data) => {
      this.setState({
        isLoggedIn: true,
      });
    })
    .catch((error) => {
      console.log(error);
      this.setState({
        isLoggedIn: false
      })
    })
    
  }

  handleLogout() {
    this.setState({
      isLoggedIn: false,
    })
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Main logOut = {this.handleLogout}/>
      );
    }
    return (
      <Login logIn = {this.handleLogin}/>
    )
  }
}


ReactDOM.render(
  <Suspense fallback = {null}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
);
