
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('feedback').del(),

    // Inserts seed entries
    knex('feedback').insert({
      feedback_ID: 1,
      feedbacker_ID: '',
      poster_ID: '',
      comment:'',
      rating: 5
    })
  );
};
