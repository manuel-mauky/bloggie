// @flow

import React from "react"

import { Link } from "react-router-dom"
import { Navbar, Nav, NavItem } from "react-bootstrap"

/**
 * A react-router Link that is wrapped so that it behaves like
 * a bootstrap NavItem. If react-router v4 is final the react-router-bootstrap
 * project will likely include such component so that this can be deleted.
 *
 * Directly wrapping a Link in a NavItem would lead to a duplicated
 * <a> element in the resulting DOM.
 *
 * Notice: the props "active", "activeKey" and "activeHref" are
 * included by the wrapping Nav component. These may not be passed to the Link
 * component and instead are removed of the props.
 */
const BootstrapNavLink = ({ active, activeKey, activeHref, ...props }) => (
  <li role="presentation">
    <Link role="button" {...props} />
  </li>
)

const Navigation = props => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Bloggie</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Nav>
      <BootstrapNavLink to="/articles">Articles</BootstrapNavLink>
      <BootstrapNavLink to="/authors">Authors</BootstrapNavLink>
      <BootstrapNavLink to="/tags">Tags</BootstrapNavLink>
    </Nav>
  </Navbar>
)

export default Navigation
