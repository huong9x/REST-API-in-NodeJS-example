class BookNameUpdate {
    constructor(book_id, book_name) {
        this.book_id   = book_id;
        this.book_name = book_name;
    }

    buildUpdateQuery(query) {
        return query.update({name: this.book_name}).where('id', this.book_id);
    }
}

module.exports = BookNameUpdate;
