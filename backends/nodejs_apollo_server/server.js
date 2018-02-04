import express from "express"
import { graphqlExpress, graphiqlExpress } from "apollo-server-express"
import bodyParser from "body-parser"
import schema from "./data/schema"

import { createTestData } from "./data/testdata"

const GRAPHQL_PORT = 4000

const environment = process.env.NODE_ENV || "development"
if (environment === "development") {
  createTestData()
}

const graphQLServer = express()

graphQLServer.use("/graphql", bodyParser.json(), graphqlExpress({ schema }))
graphQLServer.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }))

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(`GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`)
)
