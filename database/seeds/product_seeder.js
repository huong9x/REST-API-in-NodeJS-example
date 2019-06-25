exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {name: 'Iphone 7'},
        {name: 'Iphone 8'},
        {name: 'Iphone 9'},
        {name: 'Iphone 10'},
        {name: 'Iphone 11'},
        {name: 'Iphone 12'}        
      ]);
    });
};