class Book {
    constructor(book_id, book_name) {
        this.book_id   = book_id;
        this.book_name = book_name;
    }

    getBookId() {
        return this.book_id;
    }
    getBookName() {
        return this.book_name;
    }
}

module.exports = Book;
