const BookRepository = require('./BookRepository');

module.exports = (knex) => {
    const bookRepository = new BookRepository(knex);

    return async (context, next) => {
        context.bookRepository = bookRepository;
        await next();
    };

};