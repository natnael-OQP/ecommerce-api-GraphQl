const { gql } = require('apollo-server')

const typeDefs = gql`
    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
        productId: String!
    }

    type Product {
        id: String!
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        categoryId: String!
        category: Category!
        reviews: [Review!]!
    }

    type Category {
        id: ID!
        name: String!
        products(filter: filterInput): [Product!]!
    }

    input filterInput {
        onSale: Boolean
        avgRating: Int
    }

    type Query {
        products(filter: filterInput): [Product!]!
        product(id: String!): Product!
        categories: [Category!]!
        category(id: String!): Category!
    }
`

module.exports = typeDefs
