
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({
      user_ID: 1,
      firstName:'George',
      lastName: 'Armstrong' ,
      username: 'georgy',
      email: 'george@email.com',
      password: '123',
      rating:'5'
    }),
    knex('users').insert({
      user_ID: 2,
      firstName:'Rawad',
      lastName: 'Alawar',
      username:'rara',
      email: 'raraemail.com',
      password:'123',
      rating:'5'
     }),
    knex('users').insert({
      user_ID: 3,
      firstName:'Keanu',
      lastName: 'Carnevale' ,
      username:'keakone',
      email: 'keakemail.com',
      password: '123',
      rating:'5'
    }),
    knex('users').insert({
      user_ID: 4,
      firstName:'Mahuta', 
      lastName: 'Hoerara-Smith' ,
      username: 'mahutahs',
      email: 'mahutahs@email.com',
      password: '123',
      rating:'5'
    }),
    knex('users').insert({
      user_ID: 5,
      firstName:'Oliver',
      lastName: 'Redding' ,
      username: 'm-Oli',
      email: 'oliver@email.com',
      password: '123',
      rating:'5'
    }),
    knex('users').insert({
      user_ID: 6,
      firstName:'Beth',
      lastName: 'Gants' ,
      username: 'bgants23',
      email: 'beth.gants@email.com',
      password: '123',
      rating:'5'
    }),
    knex('users').insert({
      user_ID: 7,
      firstName:'Kevin',
      lastName: 'Salik' ,
      username: 'kSa11',
      email: 'ball4life@email.com',
      password: '123',
      rating:'5'
    }),
    knex('users').insert({
      user_ID: 8,
      firstName:'Omar',
      lastName: 'Sabre' ,
      username: 'bigO',
      email: 'bigO@email.com',
      password: '123',
      rating:'5'
    }),
    knex('users').insert({
      user_ID: 9,
      firstName:'Abraham',
      lastName: 'Cohen' ,
      username: 'acon',
      email: 'acon@email.com',
      password: '123',
      rating:'5'
    }),
    knex('users').insert({
      user_ID: 10,
      firstName:'Greg',
      lastName: 'Nichols' ,
      username: 'gnichols',
      email: 'g.nichols@email.com',
      password: '123',
      rating:'5'
    }),
    knex('users').insert({
      user_ID: 11,
      firstName:'Zack',
      lastName: 'Poole' ,
      username: 'spacejam',
      email: 'zp24@email.com',
      password: '123',
      rating:'5'
    }),
    knex('users').insert({
      user_ID: 12,
      firstName:'Jennie',
      lastName: 'Smith' ,
      username: 'jennie91',
      email: 'jennie.smith@email.com',
      password: '123',
      rating:'5'
    }),
    knex('users').insert({
      user_ID: 13,
      firstName:'Yumi',
      lastName: 'Shi' ,
      username: 'yushi',
      email: 'yushi@email.com',
      password: '123',
      rating:'5'
    })
  );
};
