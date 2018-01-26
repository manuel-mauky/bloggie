import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import { importSchema } from 'graphql-import'

const typeDefs = importSchema('../../bloggie.graphql')

const mocks = {
    String: () => 'It works',
}

const schema = makeExecutableSchema({ typeDefs })
addMockFunctionsToSchema({ schema, mocks })

export default schema
