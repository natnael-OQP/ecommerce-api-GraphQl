const { db } = require('../../db')

exports.Product = {
    category: (parent, args, context) => {
        return db.categories.find(
            (category) => category.id === parent.categoryId
        )
    },
}
