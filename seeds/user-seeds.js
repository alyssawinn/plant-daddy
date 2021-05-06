const { User } = require('../models');

const userData = [
    {
        id: 1,
        firstname: "Plant Daddy Admin",
        email: "admin@plantdaddy.com",
        password: "password",
        admin: 1
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;