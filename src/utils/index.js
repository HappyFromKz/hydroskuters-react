export const getPagesArray = (totalPages) => {
    let result = [];
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)
    }
    return result;
}

export const getFilteredProducts = (sortedProducts, filterSettings) => {
    const result = sortedProducts.filter((item) => {
        const { stock, sale, model, priceRange } = filterSettings;

        // Фильтрация по наличию продукта
        if (stock !== 'all') {
            if (stock === 'inStock' && item.count === 0) {
                return false;
            }
            if (stock === 'outOfStock' && item.count !== 0) {
                return false;
            }
        }
        // Фильтрация по скидке продукта
        if (sale !== 'all') {
            if (sale === 'onSale' && !item.isSale) {
                return false;
            } else if (sale === 'notOnSale' && item.isSale) {
                return false;
            }
        }

        // Фильтрация по названию продукта
        if (model && !item.name.toLowerCase().includes(model.toLowerCase())) {
            return false;
        }

        // Фильтрация по ценовому диапазону
        if (priceRange && (item.price < priceRange[0] || item.price > priceRange[1])) return false;

        return true;
    });
    return result;
}

