const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema/typeDefs')
const resolvers = require('./schema/resolver')

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})
