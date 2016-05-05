
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('listings').del(),

    // Inserts seed entries
    knex('listings').insert({id: 1,
      renter_ID: '',
      lister_ID:'',
      suburb:'',
      streetName:'',
      streetNumber:'',
      city:'',
      country:'',
      size:'',
      price:0,
      negotiable: true,
      url: '',
      startDate:'2016-05-05',
      endDate:'2016-05-13',
      availability:true})

  );
};
