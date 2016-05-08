
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('feedback').del(),

    // Inserts seed entries
    knex('feedback').insert({
      feedback_ID: 2,
      feedbacker_ID: 3,
      poster_ID: 1,
      comment:'I stored my mattress at George\'s place for 4 days. His space was very clean and tidy.',
      rating: 5
    }),
    knex('feedback').insert({
      feedback_ID: 3,
      feedbacker_ID: 5,
      poster_ID: 4,
      comment:'Mahuta\'s space was exactly as advertised in the pictures. I am in the middle of finding a new apartment and needed to store my clothes and furniture. It all fit great.',
      rating: 5
    }),
    knex('feedback').insert({
      feedback_ID: 4,
      feedbacker_ID: 6,
      poster_ID: 4,
      comment:'I\'m so glad Stow exists! I only had to store my band equipment for a night and Mahuta\'s place was perfect. Will use again.',
      rating: 5
    }),
    knex('feedback').insert({
      feedback_ID: 5,
      feedbacker_ID: 7,
      poster_ID: 4,
      comment:'No problems, everything was stowed smoothly',
      rating: 5
    }),
    knex('feedback').insert({
      feedback_ID: 6,
      feedbacker_ID: 8,
      poster_ID: 1,
      comment:'Great experience. Super easy',
      rating: 5
    }),
  );
};
