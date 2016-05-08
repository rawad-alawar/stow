
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('listings').del(),

    // Inserts seed entries
    knex('listings').insert({
      renter_ID: '',
      lister_ID: 2,
      suburb:'City centre',
      streetName:'courtney place',
      streetNumber:'134',
      city:'wellington',
      country:'New zealand',
      size:'spare garage',
      price:180,
      description: 'empty, off street garage. can store a lot, you will also have a key to access whenever you need.',
      negotiable: true,
      url: 'http://www.qbikinsurance.com/wp-content/uploads/2013/12/bigstock-Empty-garage-with-metal-roll-u-25573682.jpg',
      availability:true
    })
  );
};
