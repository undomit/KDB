import React from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import Carriers from './Carriers'
import IssueList from './IssueList'
import Browse from './Browse'
import Jumbotron from './Jumbotron'
import Users from './Users'
import UserAdd from './UserAdd'
import Categories from './Categories'
import CategoryAdd from './CategoryAdd'
import CategoryDetail from './CategoryDetail'
import CarrierAdd from './CarrierAdd'
import IssueAdd from './IssueAdd'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import IssueDetail from './IssueDetail'


class Main extends React.Component {
  render() {
    return (
      <div>
      
          <Navbar />
          <div className = "row">
            <div id = "menu" className = "col-sm-3">
              <Menu />
            </div>
            <div className = "col-sm-7">
              <Switch>
                <Route exact path = "/"
                       children = {<Jumbotron />}
                />
                <Route path = "/categories/list"
                       children = {<Categories />}
                />
                <Route exact path = "/categories/add">
                  <CategoryAdd />
                </Route>
                <Route exact path = "/categories/:id"
                       children = {<CategoryDetail />}
                />

                <Route exact path = "/carriers/add">
                  <CarrierAdd />
                </Route>
                <Route exact path = "/carriers/list">
                  <Carriers />
                </Route>
                <Route exact path = "/issues/list">
                  <IssueList />
                </Route>
                <Route exact path = "/issue/:id"
                    children = {<IssueDetail />}
                />
                <Route exact path = "/issues/add">
                  <IssueAdd />
                </Route>
                <Route exact path = "/browse/list">
                  <Browse />
                </Route>
                <Route exact path = "/users/list">
                  <Users />
                </Route>
                <Route exact path = "/users/add">
                  <UserAdd />
                </Route>
              </Switch>
            </div>
          </div>
        
      </div>
    );
  }
}

export default Main
