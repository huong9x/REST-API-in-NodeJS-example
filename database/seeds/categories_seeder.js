exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {name: 'Science'},
        {name: 'Entertainment'},
        {name: 'Magazine'}      
      ]);
    });
};