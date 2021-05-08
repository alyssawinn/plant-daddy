const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class PlantCategory extends Model {}

PlantCategory.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrememnt: true
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'category'
        }
    );

    module.exports = PlantCategory;