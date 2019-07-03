const Category     = require('./Category');

class CategoryRepository {
    constructor(knex) {
        this.knex = knex;
    }

    async find(categoryWithCondition) {
        let categories = await categoryWithCondition.buildSearchQuery(this.knex.select('*').from('categories'));
        return categories.map((category) => new Category(category.id, category.name));
    }

    async create(category) {
        return await category.make(this.knex('categories'));        
    }

    async update(categoryWithCondition) {
        return await categoryWithCondition.buildUpdateQuery(this.knex('categories'));        
    }

    async delete(id) {
        return await this.knex('categories').where('id', id).del();
    }

}

module.exports = CategoryRepository;
