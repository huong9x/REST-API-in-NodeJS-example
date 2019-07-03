class BookCreate {
    constructor(name) {
        this.name = name;
    }
    make(query) {
        return query.insert({ name: this.name }).then(result => result[0]);
    }
}

module.exports = BookCreate;
