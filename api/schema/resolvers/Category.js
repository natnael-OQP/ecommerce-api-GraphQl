const { db } = require("../../db")

exports.Category = {
    products: (parent, args, context) => {
        return db.products.filter((product) => product.categoryId === parent.id)
    },
}
