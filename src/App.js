import React from 'react'
import Login from './User/Login'
import Main from './UI/Main'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleSubmit() {
    this.setState({
      isLoggedIn: true,
    })
  }

  handleLogOut() {
    this.setState({
      isLoggedIn: false,
    })
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Main logOut = {this.handleLogOut}/>
      );
    }
    return (
      <Login
        onSubmit = {this.handleSubmit}
      />
    )
  }
}

export default App
