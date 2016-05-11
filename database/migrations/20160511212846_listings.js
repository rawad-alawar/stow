
exports.up = function(knex, Promise) {

  console.log('create table')

  return knex.schema.createTableIfNotExists('listings', function(table) {
      table.increments('listing_ID')
      table.string('heading')
      table.integer('renter_ID')
      table.integer('lister_ID')
      table.string('listerName')
      table.string('suburb')
      table.string('city')
      table.string('size')
      table.text('description')
      table.decimal('price')
      table.string('url')
      table.boolean('isAvailable')
      table.boolean('hasFeedback')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('listings').then(function () {
    console.log('users table was dropped')
  })
};
