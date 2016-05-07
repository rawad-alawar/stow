var knex = require('./connection')

function getListingsByLocation(city){
  return knex('listings').where({
    city: city
  }).select()
  .then(function(data){
    return data
  })
}

module.exports = getListingsByLocation
