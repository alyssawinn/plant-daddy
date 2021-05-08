const User = require('./User');
const PlantType = require('./PlantType');
const PlantCategory = require('./PlantCategory');
const Plant = require('./Plant');

User.hasMany(Plant, {
    foreignKey: 'user_id'
});

Plant.belongsTo(User, {
    foreignKey: 'user_id'
});

User.belongsToMany(PlantType, {
    through: Plant,
    foreignKey: 'user_id'
});

PlantType.belongsToMany(User, {
    through: Plant, 
    foreignKey: 'plant_id'
});

PlantType.belongsTo(PlantCategory, {
    foreignKey: 'category_id'
});

/* PlantCategory.hasMany(PlantType, {
    foreignKey: 'category_id'
}); */


module.exports = { User, PlantType, PlantCategory, Plant};