
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({
      username: 'georgy',
      email: 'george@email.com',
      password: '123',
      rating:'5'
    }),
    knex('users').insert({
      username:'rara',
      email: 'raraemail.com',
      password:'123',
      rating:'5'
     }),
    knex('users').insert({
      username:'keakone',
      email: 'keakemail.com',
      password: '123',
      rating:'5'
    }),
    knex('users').insert({
      username: 'mahutahs',
      email: 'mahutahs@email.com',
      password: '123',
      rating:'5'
    }),
    knex('users').insert({
      username: 'm-Oli',
      email: 'oliver@email.com',
      password: '123',
      rating:'5'
    }),
    knex('users').insert({
      username: 'bgants23',
      email: 'beth.gants@email.com',
      password: '123',
      rating:'5'
    }),
    knex('users').insert({
      username: 'kSa11',
      email: 'ball4life@email.com',
      password: '123',
      rating:'5'
    }),
    knex('users').insert({
      username: 'bigO',
      email: 'bigO@email.com',
      password: '123',
      rating:'5'
    }),
    knex('users').insert({
      username: 'acon',
      email: 'acon@email.com',
      password: '123',
      rating:'5'
    }),
    knex('users').insert({
      username: 'gnichols',
      email: 'g.nichols@email.com',
      password: '123',
      rating:'5'
    }),
    knex('users').insert({
      username: 'spacejam',
      email: 'zp24@email.com',
      password: '123',
      rating:'5'
    }),
    knex('users').insert({
      username: 'jennie91',
      email: 'jennie.smith@email.com',
      password: '123',
      rating:'5'
    }),
    knex('users').insert({
      username: 'yushi',
      email: 'yushi@email.com',
      password: '123',
      rating:'5'
    })
  );
};
