exports.Query = {
    products: (parent, { filter }, { db }) => {
        let filteredProducts = db.products

        if (filter) {
            const { onSale, avgRating } = filter
            if (onSale) {
                filteredProducts = filteredProducts.filter(
                    (product) => product.onSale === true
                )
            }

            if (avgRating) {
                filteredProducts = filteredProducts.filter((product) => {
                    let sumAvgRating = 0
                    let totalRating = 0

                    db.reviews.forEach((review) => {
                        if (review.productId == product.id) {
                            sumAvgRating += review.rating
                            totalRating += 1
                        }
                    })

                    if (sumAvgRating / totalRating >= avgRating) {
                        return product
                    }
                })
            }
        }
        return filteredProducts
    },
    product: (parent, { id }, { db }) =>
        db.products.find((product) => product.id === id),

    categories: (parent, args, { db }) => db.categories,

    category: (parent, { id }, { db }) =>
        db.categories.find((category) => category.id === id),
}
