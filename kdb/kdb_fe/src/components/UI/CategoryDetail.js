import React from 'react'
import './css/index.css'
//import './css/bootstrap/dist/css/bootstrap.css'
import {withRouter} from "react-router-dom";

class CategoryDetail extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      loaded: false,
      message: "Loading...",
    }
  }

  componentDidMount() {
    let url = '/api/category/';
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
            <tr>
              <td>{this.state.data.id}</td>
              <td>{this.state.data.name}</td>
              <td>{this.state.data.kind}</td>
              <td>{this.state.data.created}</td>
              <td>{this.state.data.parent_id}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default withRouter(CategoryDetail)
