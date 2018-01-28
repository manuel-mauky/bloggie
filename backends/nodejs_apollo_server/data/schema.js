import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools"
import { importSchema } from "graphql-import"

import resolvers from "./resolvers"

const typeDefs = importSchema("../../bloggie.graphql")

const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema
