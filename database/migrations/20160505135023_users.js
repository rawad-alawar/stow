
exports.up = function(knex, Promise) {

  console.log('create table')

  return knex.schema.createTableIfNotExists('users', function(table) {
      table.increments('user_ID')
      table.string('firstName')
      table.string('lastName')
      table.string('username')
      table.string('email')
      table.string('password')
      table.integer('rating')
      table.timestamps()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users').then(function () {
    console.log('users table was dropped')
  })
};
