
exports.up = function(knex, Promise) {

  console.log('create table')

  return knex.schema.createTableIfNotExists('listings', function(table) {
      table.increments('listings_ID')
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
      table.float('price')
      table.boolean('negotiable')
      table.string('url')
      table.date('startDate')
      table.date('endDate')
      table.boolean('availability')
      table.timestamps()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('listings').then(function () {
    console.log('users table was dropped')
  })
};
