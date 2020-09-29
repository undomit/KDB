import React from 'react'
import './css/index.css'
import './css/bootstrap/dist/css/bootstrap.css'
import {Redirect} from 'react-router-dom'
import ErrorMessage from '../Utils/ErrorMessage.js'
let url = '/api/category/add';

class CategoryAdd extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      kind: '',
      parent_id: null,
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
      kind: this.state.kind,
      parent_id: this.state.parent_id,
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
      return <Redirect to = "/categories/list"/>
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
            <label htmlFor="exampleInputEmail1">Kind</label>
            <input type="text"
                   className="form-control"
                   placeholder="Enter type"
                   onChange = {(e) => this.setState({
                     kind: e.target.value,
                   })
                 }
            />
            <label htmlFor="exampleInputEmail1">Parent</label>
            <input type="text"
                   className="form-control"
                   placeholder="Enter Parent ID"
                   onChange = {(e) => this.setState({
                     parent_id: e.target.value,
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

export default CategoryAdd
