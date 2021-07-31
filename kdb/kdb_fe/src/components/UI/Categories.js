import React from 'react'
import './css/index.css'
//import './css/bootstrap/dist/css/bootstrap.css'
import {Link} from "react-router-dom";

let url = '/api/category/all';

class Categories extends React.Component {
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
        if (response.status > 400) {
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
              <th scope = "col">Name</th>
              <th scope = "col">Kind</th>
              <th scope = "col">Created</th>
              <th scope = "col">Parent</th>
            </tr>
            {this.state.data.map(element => {
              let link = "/categories/" + element.id
              return (
                <tr key = {element.id}>
                  <td scope = "row">{element.id}</td>
                  <td><Link to = {link}>
                        {element.name}
                      </Link>
                  </td>
                  <td>{element.kind}</td>
                  <td>{element.created}</td>
                  <td>{element.parent_id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to = "/categories/add">
          <button className="btn btn-primary">
            Add Category
          </button>
        </Link>
      </div>
    )
  }
}

export default Categories
