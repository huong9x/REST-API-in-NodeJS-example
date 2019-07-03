const Book     = require('./Book');

class BookRepository {
    constructor(knex) {
        this.knex = knex;
    }

    async find(bookWithCondition) {
        let books = await bookWithCondition.buildSearchQuery(this.knex.select('*').from('books'));
        return books.map((book) => new Book(book.id, book.name));
    }

    async create(book) {
        return await book.make(this.knex('books'));        
    }

    async update(book) {
        return await book.buildUpdateQuery(this.knex('books'));        
    }

    async delete(id) {
        return await this.knex('books').where('id', id).del();
    }

}

module.exports = BookRepository;
