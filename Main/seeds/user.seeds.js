const { User } = require('../models');

const userData = [
  {
    username: 'collzbaba',
    password: 'test1'
    
  },
  {
    username: 'collzbaba1',
    password: 'test2'
  },
  {
    username: 'ip',
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;