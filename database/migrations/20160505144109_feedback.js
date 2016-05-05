
exports.up = function(knex, Promise) {

  console.log('create table')

  return knex.schema.createTableIfNotExists('feedback', function(table) {
      table.increments('id')
      table.string('feedbacker_ID')
      table.string('poster_ID')
      table.string('comment')
      table.integer('rating')
      table.timestamps()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('feedback').then(function () {
    console.log('feedback table was dropped')
  })
};
