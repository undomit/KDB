import React from 'react'
import './index.css'
import './bootstrap.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div className="container">
        <div id = "loginForm" className = "row justify-content-center align-items-center">
          <div className = "col-sm-6">
            <form onSubmit = {(e) => {
              e.preventDefault();
              this.props.logIn(this.state.username, this.state.password)}
            }>
              <div className ="form-group">
                <label>Username</label>
                <input onChange={(e) => this.setState({username: e.target.value})} type="text" className ="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input  onChange={(e) => this.setState({password: e.target.value})} type="password" className="form-control" id="exampleInputPassword1"/>
              </div>
              <button type="submit" className ="btn btn-primary">Log In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login
