import React from 'react'
import './css/bootstrap/dist/css/bootstrap.css'


class Jumbotron extends React.Component {
  render () {
    return (
      <div className = "jumbotron">
        <h1 className = "display-4">Knowledge is power</h1>
        <p className = "lead">Explore internal know-how and/or contribute. Let's do this together!</p>
        <hr className = "my-4"></hr>
        <p>Some other text</p>
        <div className = "btn btn-primary btn-lg" role="button">Browse</div>
      </div>
    );
  }
}

export default Jumbotron;
