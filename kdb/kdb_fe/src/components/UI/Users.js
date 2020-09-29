import React from 'react'
import './css/index.css'
import './css/bootstrap/dist/css/bootstrap.css'
import {Link} from "react-router-dom";

let url = '/api/user/all';

class Users extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      loaded: false,
      message: "Loading...",
    }
  }

  componentDidMount() {
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
      this.setState({
        data: data,
        loaded: true,
        message: "Loaded",
      })
    });
  }

  render() {
    return (
      <div className = "container">
        <table className = "table table-dark">
          <tbody>
            <tr>
              <th scope = "col">ID</th>
              <th scope = "col">Username</th>
              <th scope = "col">Firstname</th>
              <th scope = "col">Lastname</th>
              <th scope = "col">Email</th>
              <th scope = "col">Created</th>
            </tr>
            {this.state.data.map(element => {
              return (
                <tr key = {element.id}>
                  <td scope = "row">{element.id}</td>
                  <td>{element.username}</td>
                  <td>{element.firstName}</td>
                  <td>{element.lastName}</td>
                  <td>{element.email}</td>
                  <td>{element.created}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to = "/users/add">
          <button className="btn btn-primary">
            Add User
          </button>
        </Link>
      </div>
    )
  }
}

export default Users
