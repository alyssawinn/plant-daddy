const { User } = require('../models');

const userData = [
    {
        id: 1,
        userName: "admin",
        email: "admin@plantdaddy.com",
        password: "password",
        admin: 1
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;