const { v4: uuid } = require('uuid')

exports.Mutation = {
    addCategory: (parent, { input: { name } }, { db }) => {
        const newCategory = {
            name,
            id: uuid(),
        }

        db.categories.push(newCategory)
        return newCategory
    },
}
