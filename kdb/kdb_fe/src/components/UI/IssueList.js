import React from 'react'
import './css/index.css'
//import './css/bootstrap/dist/css/bootstrap.css'
import {Link} from "react-router-dom";
import ErrorMessage from '../Utils/ErrorMessage.js'
import {Redirect} from 'react-router-dom'

class IssueList extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      loaded: false,
      message: "Loading...",
      error: false,
      redirect: false
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.getIssues = this.getIssues.bind(this);
  }

  getIssues() {
    let url = '/api/issue/all';
    fetch(url,
      {
        method: 'GET'
      }
    ).then(response => {
        if (response.status > 400) {
          return this.setState({
            message: "Something went wrong...",
          });
        }
        return response.json();
    })
    .then(data => {
      console.log(this);
      this.setState({
        data: data,
        loaded: true,
        message: "Loaded",
      })
    });
  }

  componentDidMount() {
    this.getIssues();
  }

  handleDelete(id) {
    console.log(id);
    //let url = 'api/issue/' + id + '/destroy';
    let request = {
      id: id
    }
    fetch('http://localhost:8000/api/issue/'+ id + '/destroy', {
      method: 'delete',
      headers: {
        'Accept': 'application/json, text/plain,',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(request)
    })
    .then(response => {
      if (response.status > 400) {
        throw new Error()
      }
    })
    .then(() => {
      this.getIssues();
    })
    .catch(() => {
      alert('catch')
      this.setState({
        error: true,
        redirect: false,
        message: 'Something went wrong...'
      })
    })
  }

  render() {
    return (
      <div className = "container">
        <table className = "table table-dark">
          <tbody>
            <tr>
              <th scope = "col">ID</th>
              <th scope = "col">Name</th>
              <th scope = "col">Topic</th>
              <th scope = "col">Carrier</th>
              <th scope = "col">Created</th>
            </tr>
            {this.state.data.map(element => {
              let link = "/issue/" + element.id
              return (
                <tr key = {element.id}>
                  <td scope = "row">{element.id}</td>
                  <td>{element.name}</td>               
                  <td>{element.category_id}</td>
                  <td>{element.carrier_id}</td>
                  <td>{element.created}</td>
                  <td><Link to = {link}><button className="btn btn-primary">Edit</button></Link></td>
                  <td><button className="btn btn-danger" onClick={() => this.handleDelete(element.id)}>Delete</button> </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to = "/issues/add">
          <button className="btn btn-primary">
            Add Issue
          </button>
        </Link>
      </div>
    )
  }
}

export default IssueList
