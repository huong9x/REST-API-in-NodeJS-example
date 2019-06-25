exports.up = function(knex, Promise) {
    return knex.schema.hasTable('products').then(function (exists) {
        if(!exists) {
            return knex.schema.createTable('products', function (table) {
                table.increments('id');
                table.string('name');
            });
        };
    });
};
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('products');
};