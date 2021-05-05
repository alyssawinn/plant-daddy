const User = require('./User');
const PlantType = require('./PlantType');
const PlantCategory = require('./PlantCategory');

// User.hasMany(Plant, {
//     foreignKey: 'user_id'
// });

// Plant.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
// });

// User.belongsToMany(Plant, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
// });

// Plant.belongsToMany(User, {
//     foreignKey: 'plant_id',
//     onDelete: 'SET NULL'
// });

// PlantCategory.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
// });

// PlantCategory.belongsTo(Post, {
//     foreignKey: 'plant_id',
//     onDelete: 'SET NULL'
// });

// User.hasMany(PlantCategory, {
//     foreignKey: 'user_id'
// });

// Plant.hasMany(PlantCategory, {
//     foreignKey: 'plant_id'
// });

module.exports = { User, PlantType, PlantCategory,};