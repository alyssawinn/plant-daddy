const User = require('./User');
const PlantType = require('./PlantType');
const PlantCategory = require('./PlantCategory');
const Plant = require('./Plant');

User.hasMany(Plant, {
    foreignKey: 'user_id'
});

Plant.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.belongsToMany(PlantType, {
    through: Plant,
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

PlantType.belongsToMany(User, {
    through: Plant, 
    foreignKey: 'plant_id',
    onDelete: 'SET NULL'
});

PlantCategory.belongsTo(PlantType, {
    foreignKey: 'plant_id',
    onDelete: 'SET NULL'
});

PlantCategory.hasMany(PlantType, {
    foreignKey: 'plant_id',
    onDelete: 'SET NULL'
});


module.exports = { User, PlantType, PlantCategory, Plant};