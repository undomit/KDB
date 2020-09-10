import React from 'react'
import './index.css'
import './bootstrap.css'

class Login extends React.Component {
  render() {
    return (
      <div className = "container">
        <div className="row align-items-center">
          <div className = "col- align-self-center">
            <form onSubmit = {this.props.onSubmit}>
              <div className ="form-group">
                <label>Email address</label>
                <input type="email" className ="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
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
