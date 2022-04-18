exports.Mutation = {
    addCategory: (parent, { input: { name } }, { db }) => {
        db.categories.push({
            name,
            id: Math.floor(Math.random(1) * 10),
        })
        return { name, id: Math.floor(Math.random(1) * 10) }
    },
}
