import React from 'react'
import './css/index.css'
import './css/bootstrap/dist/css/bootstrap.css'
import CategoryAdd from './CategoryAdd.js'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";

class Categories extends React.Component {
  render() {
    return (
      <div className = 'container'>
        <div>
          <h1>Categories List</h1>
          <Link to = "/Categories/add">
            <button>Add</button>
          </Link>
        </div>
        <table class="table">
          <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Categories
