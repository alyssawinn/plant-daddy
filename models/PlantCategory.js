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
                allowNull: false,
                //validation?
            },
        },
        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'plant'
        }
    );

    module.exports = PlantCategory;