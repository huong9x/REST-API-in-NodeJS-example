exports.up = function(knex, Promise) {
    return knex.schema.hasTable('categories').then(function (exists) {
        if(!exists) {
            return knex.schema.createTable('categories', function (table) {
                table.increments('id');
                table.string('name');
            });
        };
    });
};
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('categories');
};