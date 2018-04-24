# Bloggie

Bloggie is an example application centered around [GraphQL](http://graphql.org).
It implements a simple blogging application with "articles", "authors" and "comments".

The intension of this repository is to have several alternative implementations of the same use-case
so that interested developers can compare different technologies and implementation styles both in
the frontend and backend.

![screenshot](./bloggie_screenshot.png)

There is a [GraphQL Schema](./bloggie.graphql) that defines the data-model of the application and the common interface for the components of the application.
To compare different technologies there are multiple implementations both for the frontend and the backend that all conform to the same GraphQL Schema.
This way you can run each frontend flavor together with each backend flavor.

**Notice:** This app is not intended as a real-world blog application!
It is neither feature-complete nor optimized for usability and most importantly:
It highly possible that it contains bugs and security issues.
The only purpose of this repository is to act as an example and tech demo.
