import React from 'react'
import './css/index.css'
//import './css/bootstrap/dist/css/bootstrap.css'
import {Link} from "react-router-dom";

let url = '/api/carrier/all';

class Carriers extends React.Component {
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
              <th scope = "col">Name</th>
              <th scope = "col">Created</th>
            </tr>
            {this.state?.data?.map(element => {
              return (
                <tr key = {element.id}>
                  <td scope = "row">{element.id}</td>
                  <td>{element.name}</td>
                  <td>{element.created}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to = "/carriers/add">
          <button className="btn btn-primary">
            Add Carrier
          </button>
        </Link>
      </div>
    )
  }
}

export default Carriers
