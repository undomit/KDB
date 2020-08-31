import React from 'react'
import './css/bootstrap/dist/css/bootstrap.css'


class List extends React.Component {
  render() {
    return (
      <table className = "table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Created</th>
            <th scope="col">Updated</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Technology</td>
            <td>May 22, 2017 12:37</td>
            <td>May 22, 2017 12:37</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>IIG Procedures</td>
            <td>May 22, 2017 12:37</td>
            <td>May 22, 2017 12:37</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>General Product Knowledge</td>
            <td>May 22, 2017 12:37</td>
            <td>May 22, 2017 12:37</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default List;
