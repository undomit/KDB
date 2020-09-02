import React from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import Carriers from './Carriers'
import IssueList from './IssueList'
import Browse from './Browse'
import Jumbotron from './Jumbotron'
import Users from './Users'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import Categories from './Categories'

class Main extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <div className = "row">
            <div id = "menu" className = "col-sm-3">
              <Menu />
            </div>
            <div className = "col-sm-7">
              <Switch>
                <Route exact path = "/">
                  <Jumbotron />
                </Route>
                <Route path = "/Categories">
                  <Categories />
                </Route>
                <Route path = "/Carriers">
                  <Carriers />
                </Route>
                <Route path = "/IssueList">
                  <IssueList />
                </Route>
                <Route path = "/Browse">
                  <Browse />
                </Route>
                <Route path = "/Users">
                  <Users />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default Main
