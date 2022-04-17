const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema/typeDefs')
const resolvers = require('./schema/resolvers')
const { db } = require('./db')

const server = new ApolloServer({ typeDefs, resolvers, context: { db } })

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})
