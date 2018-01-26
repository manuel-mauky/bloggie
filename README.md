# Bloggie

Bloggie is an example application to compare different techniques like [GraphQL](http://graphql.org), [React](https://reactjs.org), [Apollo-Client](https://www.apollographql.com) and [Spring-Data](https://projects.spring.io/spring-data).

There is a [GraphQL Schema](./bloggie.gql) that defines the data-model of the application and the common interface for the components of the application.
To compare different technologies there are multiple implementations both for the frontend and the backend that all conform to the same GraphQL Schema.
This way you can run each frontend flavor together with each backend flavor.

An exception to this is the Spring-Data backend which also provides a REST-API and a REST based frontend implementation with React and Angular. This is here to compare GraphQL with REST itself.
