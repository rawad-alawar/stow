
exports.up = function(knex, Promise) {

  console.log('create table')

  return knex.schema.createTableIfNotExists('feedback', function(table) {
      table.increments('feedback_ID')
      table.integer('listingId')
      table.integer('feedbacker_ID')
      table.integer('poster_ID')
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
