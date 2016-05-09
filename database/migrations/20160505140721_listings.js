
exports.up = function(knex, Promise) {

  console.log('create table')

  return knex.schema.createTableIfNotExists('listings', function(table) {
      table.increments('lister_ID')
      table.string('heading')
      table.integer('renter_ID')
      table.integer('lister_ID')
      table.string('suburb')
      table.string('streetName')
      table.string('streetNumber')
      table.string('city')
      table.string('country')
      table.string('size')
      table.text('description')
      table.decimal('price')
      table.string('url')
      table.dateTime('startDate')
      table.dateTime('endDate')
      table.boolean('isAvailable')
      table.timestamps()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('listings').then(function () {
    console.log('users table was dropped')
  })
};
