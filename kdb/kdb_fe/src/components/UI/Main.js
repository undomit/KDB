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
                <Route exact path = "/main">
                  <Jumbotron />
                </Route>
                <Route exact path = "/categories/list">
                  <Categories />
                </Route>
                <Route exact path = "/categories/add">
                  <CategoryAdd />
                </Route>
                <Route exact path = "/carriers/list">
                  <Carriers />
                </Route>
                <Route exact path = "/issues/list">
                  <IssueList />
                </Route>
                <Route exact path = "/browse/list">
                  <Browse />
                </Route>
                <Route exact path = "/users/list">
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
