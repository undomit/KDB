import React from 'react'
import './css/index.css'
//import './css/bootstrap/dist/css/bootstrap.css'
import {withRouter} from "react-router-dom";
import ErrorMessage from '../Utils/ErrorMessage.js'
import {Redirect} from 'react-router-dom'


class IssueDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      solution: '',
      carrier_id: '',
      category_id: '',
      loaded: false,
      message: "Loading...",
      redirect: false,
      error: false,
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentDidMount() {
    let url = '/api/issue/';
    const id = this.props.match.params.id;
    url += id;
    console.log(url);
    fetch(url,
      {
        method: 'GET'
      }
    ).then(response => {
        if (response.status >= 400) {
          return this.setState({
            message: "Something went wrong...",
          });
        }
        return response.json();
    })
    .then(data => {
      console.log(data);
      this.setState({
        name: data.name,
        description: data.description,
        solution: data.solution,
        category_id: data.category_id,
        carrier_id: data.carrier_id,
        loaded: true,
        message: "Loaded",
      })

    });
  }

  handleDelete(event) {
    event.preventDefault();

    let req = {
      id: this.props.match.params.id
    }

    let url = '/api/issue/';
    const id = this.props.match.params.id;
    url += id;
    url += '/destroy';
    fetch(url, {
        method: 'delete',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
      }
    ).then(response => {
      console.log(response.status);
      if (response.status >= 400) {
        throw new Error()
      }
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

  handleUpdate(event) {
    event.preventDefault();

    let req = {
      name: this.state.name,
      description: this.state.description,
      solution: this.state.solution,
      carrier_id: this.state.carrier_id,
      category_id: this.state.category_id,
    }

    let url = '/api/issue/';
    const id = this.props.match.params.id;
    url += id;
    url += '/destroy';

    fetch(url, {
        method: 'put',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
      }
    ).then(response => {
      console.log(response.status);
      if (response.status >= 400) {
        alert('throw')
        throw new Error()
      }
    }).then(() => {
      this.setState({
        redirect: true,
        error: false
      })
    }).catch(() => {
        alert('catch');
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
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input type="text"
                   className="form-control"
                   placeholder="Enter issue name"
                   value={this.state.name}
                   onChange={(e) => {this.setState({name: e.target.value})}}
            />
            <label htmlFor="exampleFormControlTextarea1">Description</label>
            <textarea className ="form-control"
                      id="exampleFormControlTextarea1"
                      rows="10"
                      placeholder="Enter a description"
                      value={this.state.description}
                      onChange={(e) => {this.setState({description: e.target.value})}}
            />
            <label htmlFor="exampleFormControlTextarea1">Solution</label>
            <textarea className ="form-control"
                      id="exampleFormControlTextarea1"
                      rows="10"
                      placeholder="Enter a description"
                      value={this.state.solution}
                      onChange={(e) => {this.setState({solution: e.target.value})}}
            />
            <label htmlFor="exampleInputEmail1">Category</label>
            <input type="text"
                   className="form-control"
                   placeholder="Enter a category"
                   value={this.state.category_id}
                   onChange={(e) => {this.setState({category_id: e.target.value})}}
            />
            <label htmlFor="exampleInputEmail1">Carrier</label>
            <input type="text"
                   className="form-control"
                   placeholder="Enter a carrier"
                   value={this.state.carrier_id}
                   onChange={(e) => {this.setState({carrier_id: e.target.value})}}
            />
          </div>
        </form>
        <button type="submit" onClick={this.handleDelete} className="btn btn-danger">
            Delete
        </button>
        <button type="submit" onClick={this.handleUpdate} className="btn btn-primary">
            Update
        </button>
      </div>
    )
  }
}

export default withRouter(IssueDetail)
