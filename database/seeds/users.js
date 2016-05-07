
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({user_ID: 1, firstName:'George', lastName: 'Armstrong' , username: 'georgy', email: 'george@email.com', password: '123', rating:'5'}),
    knex('users').insert({user_ID: 2, firstName:'Rawad', lastName: 'Alawar' , username:'rara', email: 'raraemail.com' , password:'123', rating:'5' }),
    knex('users').insert({user_ID: 3, firstName:'Keanu', lastName: 'Carnevale' , username:'keakone', email: 'keakemail.com', password: '123', rating:'5'})
  );
};
