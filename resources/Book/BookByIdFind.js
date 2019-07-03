class BookByIdFind {
    constructor(book_id) {
        this.book_id = book_id;
    }
    buildSearchQuery(query) {
        return query.where('id', this.book_id)
    }
}

module.exports = BookByIdFind;
