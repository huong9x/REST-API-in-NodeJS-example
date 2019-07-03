class CategoryCreate {
    constructor(category_name) {
        this.category_name = category_name;
    }

    make(query) {
        return query.insert({ name: name }).then(result => result[0]);
    }
}

module.exports = CategoryCreate;
