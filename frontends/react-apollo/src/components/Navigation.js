// @flow

import React from "react"

import { NavLink } from "react-router-dom"
import { Navbar, Nav, NavItem } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const Navigation = props => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <NavLink to="/">Bloggie</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/articles">
          <NavItem>Articles</NavItem>
        </LinkContainer>
        <LinkContainer to="/authors">
          <NavItem>Authors</NavItem>
        </LinkContainer>
        <LinkContainer to="/tags">
          <NavItem>Tags</NavItem>
        </LinkContainer>
        <LinkContainer to="/about">
          <NavItem>About</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation
