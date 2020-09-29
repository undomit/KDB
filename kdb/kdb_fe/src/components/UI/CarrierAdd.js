import React from 'react'
import './css/index.css'
import './css/bootstrap/dist/css/bootstrap.css'
import {Redirect} from 'react-router-dom'
import ErrorMessage from '../Utils/ErrorMessage.js'

let url = '/api/carrier/add';

class CarrierAdd extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      redirect: false,
      error: false,
      message: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let request = {
      name: this.state.name,
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
      return <Redirect to = "/carriers/list"/>
    }
    if (this.state.error) {
      return <ErrorMessage message = {this.state.message}/>
    }
    return (
      <div className = 'container'>
        <form onSubmit = {this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input type="text"
                   className="form-control"
                   placeholder="Enter category name"
                   onChange = {(e) => this.setState({
                     name: e.target.value,
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

export default CarrierAdd
