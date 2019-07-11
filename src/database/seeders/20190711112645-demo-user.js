const bcrypt = require('bcrypt');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@k.com',
      password: bcrypt.hashSync('password', 10),
      slug: 'john-doe',
      gender: 'male',
      isVerified: true,
      dateOfBirth: '1980-07-11',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@k.com',
      password: bcrypt.hashSync('password', 10),
      slug: 'jane-doe',
      gender: 'female',
      isVerified: true,
      dateOfBirth: '1980-07-11',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Jack',
      lastName: 'Doe',
      email: 'jack.doe@k.com',
      password: bcrypt.hashSync('password', 10),
      slug: 'jack-doe',
      gender: 'male',
      isVerified: true,
      dateOfBirth: '1980-07-11',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]),
  down: queryInterface => queryInterface.bulkDelete('Users')
};
