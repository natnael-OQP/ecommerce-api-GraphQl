exports.Query = {
    products: (parent, { filter }, { db }) => {
        let filteredProducts = db.products
        if (filter) {
            const { onSale, avgRating } = filter
            if (onSale)
                filteredProducts = filteredProducts.filter(
                    (product) => product.onSale === true
                )
            if ([1, 2, 3, 4, 5].includes(avgRating))
            filteredProducts = filteredProducts.filter((product) => {
                    let sumRating = 0
                    db.reviews.forEach((review) => {
                        if ((review.productId = product.id))
                            sumRating += review.rating
                    })
                    console.log(sumRating, product.name)
                })
        }
        return filteredProducts
    },
    product: (parent, { id }, { db }) =>
        db.products.find((product) => product.id === id),

    categories: (parent, args, { db }) => db.categories,

    category: (parent, { id }, { db }) =>
        db.categories.find((category) => category.id === id),
}
