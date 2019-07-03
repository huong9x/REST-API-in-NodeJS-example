class CategoryByIdFind {
    constructor(category_id) {
        this.category_id = category_id;
    }

    buildSearchQuery(query) {
        return query.where('id', this.category_id);
    }
}

module.exports = CategoryByIdFind;
