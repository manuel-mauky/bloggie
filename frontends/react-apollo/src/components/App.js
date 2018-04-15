// @flow

import React, { Component } from "react"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Navigation from "./Navigation"
import ArticleOverviewPage from "./articles/ArticleOverviewPage"
import AuthorsOverviewPage from "./authors/AuthorsOverviewPage"
import AuthorDetailsPage from "./authors/AuthorDetailsPage"
import ArticleDetailsPage from "./articles/ArticleDetailsPage"
import About from "./About"

import TagOverviewPage from "./tags/TagOverviewPage"

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
              <Route path="/authors/:id" component={AuthorDetailsPage} />
              <Route path="/authors" component={AuthorsOverviewPage} />
              <Route path="/articles/:permalink" component={ArticleDetailsPage} />
              <Route path="/articles" component={ArticleOverviewPage} />
              <Route path="/tags" component={TagOverviewPage} />
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
