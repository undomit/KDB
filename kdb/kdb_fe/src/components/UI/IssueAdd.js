import React from 'react'
import './css/index.css'
import './css/bootstrap/dist/css/bootstrap.css'
import {Redirect} from 'react-router-dom'
import ErrorMessage from '../Utils/ErrorMessage.js'

let url = '/api/issue/add';

class IssueAdd extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      solution: '',
      carrier_id: '',
      category_id: '',
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
      description: this.state.description,
      solution: this.state.solution,
      carrier_id: this.state.carrier_id,
      category_id: this.state.category_id,
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
      return <Redirect to = "/issues/list"/>
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
                   placeholder="Enter issue name"
                   onChange = {(e) => this.setState({
                     name: e.target.value,
                   })
                 }
            />
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea className ="form-control"
                      id="exampleFormControlTextarea1"
                      rows="10"
                      placeholder="Enter a description"
                      onChange = {(e) => this.setState({
                        description: e.target.value,
                      })}>
            </textarea>
            <label for="exampleFormControlTextarea1">Solution</label>
            <textarea className ="form-control"
                      id="exampleFormControlTextarea1"
                      rows="10"
                      placeholder="Enter a description"
                      onChange = {(e) => this.setState({
                        solution: e.target.value,
                      })}>
            </textarea>
            <label htmlFor="exampleInputEmail1">Category</label>
            <input type="text"
                   className="form-control"
                   placeholder="Enter a category"
                   onChange = {(e) => this.setState({
                     category_id: e.target.value,
                   })
                 }
            />
            <label htmlFor="exampleInputEmail1">Carrier</label>
            <input type="text"
                   className="form-control"
                   placeholder="Enter a carrier"
                   onChange = {(e) => this.setState({
                     carrier_id: e.target.value,
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

export default IssueAdd
