const { gql } = require('apollo-server')

const typeDefs = gql`
    type Product {
        id: String!
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        categoryId: String!
        category: Category!
    }
    type Category {
        id: ID!
        name: String!
        products: [Product!]!
    }

    type Query {
        products: [Product!]!
        product(id: String!): Product!
        categories: [Category!]!
        category(id: String!): Category!
    }
`

module.exports = typeDefs
