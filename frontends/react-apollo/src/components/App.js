// @flow

import React, { Component } from "react"

import { BrowserRouter, Route, Switch } from "react-router-dom"

import Navigation from "./Navigation"
import ArticleList from "./ArticleList"
import AuthorList from "./AuthorList"
import ArticleDetails from "./ArticleDetails"
import TagList from "./TagList"
import TagDetails from "./TagDetails"

const NoMatch = props => <p>404</p>

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <div>
            <Switch>
              <Route path="/" exact component={ArticleList} />
              <Route path="/authors" component={AuthorList} />
              <Route path="/articles/:permalink" component={ArticleDetails} />
              <Route path="/articles" component={ArticleList} />
              <Route path="/tags/:tagname" component={TagDetails} />
              <Route path="/tags" component={TagList} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
