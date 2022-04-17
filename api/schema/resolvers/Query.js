const { db } = require('../../db')

exports.Query = {
    products: (parent, args, context) => {
        return db.products
    },
    product: (parent, args, context) => {
        return db.products.find((product) => product.id === args.id)
    },
    categories: (parent, args, context) => {
        return db.categories
    },
    category: (parent, args, context) => {
        return db.categories.find((category) => category.id === args.id)
    },
}
