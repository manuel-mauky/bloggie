// @flow

import React, { Component } from "react"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Navigation from "./Navigation"
import ArticleOverviewPage from "./articles/ArticleOverviewPage"
import AuthorsOverviewPage from "./authors/AuthorsOverviewPage"
import ArticleDetailsPage from "./articles/ArticleDetailsPage"
import TagList from "./TagList"
import TagDetails from "./TagDetails"
import About from "./About"

import NoMatchPage from "./NoMatchPage"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <div className="container">
            <Switch>
              <Route path="/" exact component={ArticleOverviewPage} />
              <Route path="/authors" component={AuthorsOverviewPage} />
              <Route path="/articles/:permalink" component={ArticleDetailsPage} />
              <Route path="/articles" component={ArticleOverviewPage} />
              <Route path="/tags/:tagname" component={TagDetails} />
              <Route path="/tags" component={TagList} />
              <Route path="/about" component={About} />
              <Route component={NoMatchPage} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
