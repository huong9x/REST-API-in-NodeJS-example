class CategoryNameUpdate {
    constructor(category_id, category_name) {
        this.category_id   = category_id;
        this.category_name = category_name;
    }

    buildUpdateQuery(query) {
        return query.update({name: this.category_name}).where('id', this.category_id);
    }
}

module.exports = CategoryNameUpdate;
