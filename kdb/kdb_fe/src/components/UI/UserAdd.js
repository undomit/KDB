import React from 'react'
import './css/index.css'
import './css/bootstrap/dist/css/bootstrap.css'
import {Redirect} from 'react-router-dom'
import ErrorMessage from '../Utils/ErrorMessage.js'

let url = '/api/user/add';

class UserAdd extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      redirect: false,
      error: false,
      message: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let request = {
      username: this.state.username,
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
    }
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    }
  ).then(response => {
    if (response.status >= 400) {
      throw new Error()
    }
    return response.json()
  }).then(() => {
    this.setState({
      redirect: true,
    })
  }).catch(() => {
      this.setState({
        redirect: false,
        error: true,
        message: 'Something went wrong...',
      })
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to = "/users/list"/>
    }
    if (this.state.error) {
      return <ErrorMessage message = {this.state.message}/>
    }
    return (
      <div className = 'container'>
        <form onSubmit = {this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input type="text"
                   className="form-control"
                   placeholder="Enter category name"
                   onChange = {(e) => this.setState({
                     username: e.target.value,
                   })
                 }
            />
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="text"
                   className="form-control"
                   placeholder="Enter type"
                   onChange = {(e) => this.setState({
                     email: e.target.value,
                   })
                 }
            />
            <label htmlFor="exampleInputEmail1">Firstname</label>
            <input type="text"
                   className="form-control"
                   placeholder="Firstname"
                   onChange = {(e) => this.setState({
                     firstName: e.target.value,
                   })
                 }
            />
            <label htmlFor="exampleInputEmail1">Lastname</label>
            <input type="text"
                   className="form-control"
                   placeholder="Lastname"
                   onChange = {(e) => this.setState({
                     lastName: e.target.value,
                   })
                 }
            />
            <label htmlFor="exampleInputEmail1">Password</label>
            <input type="password"
                   className="form-control"
                   placeholder=""
                   onChange = {(e) => this.setState({
                     password: e.target.value,
                   })
                 }
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    )
  }
}

export default UserAdd
