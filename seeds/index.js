const seedPlant = require('./plants-seeds');
const seedCategories = require('./category-seeds');
const seedUsers = require('./user-seeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedPlant();
  console.log('--------------');

  await seedUsers();
  console.log('--------------');

  await seedCategories();
  console.log('--------------');

  process.exit(0);
};

seedAll();
