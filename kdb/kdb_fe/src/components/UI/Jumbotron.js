import React from 'react'
import {Link} from 'react-router-dom'
//import './css/bootstrap/dist/css/bootstrap.css'


class Jumbotron extends React.Component {
  render () {
    return (
      <div className = "jumbotron">
        <h1 className = "display-4">Knowledge is power</h1>
        <p className = "lead">Explore internal know-how and contribute. Let's do this together!</p>
        <hr className = "my-4"></hr>
        <p>Browse our issue list and get started!</p>
        <Link to = "/issues/list">
          <div className = "btn btn-primary btn-lg" role="button">Browse</div>
        </Link>
      </div>
    );
  }
}

export default Jumbotron;
