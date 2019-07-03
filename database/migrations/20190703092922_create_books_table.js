exports.up = function(knex, Promise) {
    return knex.schema.hasTable('books').then(function (exists) {
        if(!exists) {
            return knex.schema.createTable('books', function (table) {
                table.increments('id');
                table.string('name');
            });
        };
    });
};
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('books');
};