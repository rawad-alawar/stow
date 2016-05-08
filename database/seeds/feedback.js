
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('feedback').del(),

    // Inserts seed entries
    knex('feedback').insert({
      feedbacker_ID: '',
      poster_ID: '',
      comment:'',
      rating: 5
    })
  );
};
