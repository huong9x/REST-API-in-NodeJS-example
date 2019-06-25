const Product = require('./Product');

class ProductRepository {
    constructor(knex) {
        this.knex = knex;
    }

    async findProducts() {
        let products = await this.knex.select('*').from('products');
        return products.map((product) => new Product(product.id, product.name));
    }

    async findProduct(id) {
        let product = await this.knex.select('*').from('products').where('id', id);
        return new Product(product[0].id, product[0].name);
    }

    async create(name) {
        return await this.knex('products').insert({ name: name });
    }

    async update(id, name) {
        return await this.knex('products').update({name: name})
                                                 .where('id', id);
    }

    async delete(id) {
        return await this.knex('products').where('id', id).del();
    }

}

module.exports = ProductRepository;
