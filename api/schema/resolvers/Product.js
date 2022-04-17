const { db } = require('../../db')

exports.Product = {
    category: (parent, args, context) => {
        console.log(parent)
        return db.categories.find(
            (category) => category.id === parent.categoryId
        )
    },
}
