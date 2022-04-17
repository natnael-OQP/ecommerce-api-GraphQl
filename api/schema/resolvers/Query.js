exports.Query = {
    products: (parent, { filter }, { db }) =>
        filter?.onSale
            ? db.products.filter((product) => product.onSale === true)
            : db.products,

    product: (parent, { id }, { db }) =>
        db.products.find((product) => product.id === id),

    categories: (parent, args, { db }) => db.categories,

    category: (parent, { id }, { db }) =>
        db.categories.find((category) => category.id === id),
}
