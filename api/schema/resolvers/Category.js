exports.Category = {
    products: ({ id }, { filter }, { db }) =>
        filter?.onSale
            ? db.products.filter(
                  (product) =>
                      product.categoryId === id && product.onSale === true
              )
            : db.products.filter((product) => product.categoryId === id),
}
