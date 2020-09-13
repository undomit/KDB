import React from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import Carriers from './Carriers'
import IssueList from './IssueList'
import Browse from './Browse'
import Jumbotron from './Jumbotron'
import Users from './Users'
import CategoryAdd from './CategoryAdd'
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
                <Route exact path = "/Main">
                  <Jumbotron />
                </Route>
                <Route exact path = "/Categories">
                  <Categories />
                </Route>
                <Route exact path = "/Categories/add">
                  <CategoryAdd />
                </Route>
                <Route exact path = "/Carriers">
                  <Carriers />
                </Route>
                <Route exact path = "/IssueList">
                  <IssueList />
                </Route>
                <Route exact path = "/Browse">
                  <Browse />
                </Route>
                <Route exact path = "/Users">
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
