import React from 'react'
import './css/index.css'
import './css/bootstrap/dist/css/bootstrap.css'
import {Link, Redirect} from 'react-router-dom'
let url = '/api/category/add';

class CategoryAdd extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
      redirect: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let request = {
      name: this.state.input,
    }
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    }
    ).then(response => response.json()
    ).then(data => console.log(data));
    this.setState({
      redirect: true,
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to = "/Categories/list"/>
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
                     input: e.target.value,
                   })
                 }
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default CategoryAdd
