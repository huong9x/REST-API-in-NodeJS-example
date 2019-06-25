const ProductRepository = require('./ProductRepository');

module.exports = (knex) => {
    const productRepository = new ProductRepository(knex);

    return async (context, next) => {
        context.productRepository = productRepository;
        await next();
    };

};