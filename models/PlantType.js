const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PlantType extends Model { }

PlantType.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrememnt: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        waterAmount: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sunlightAmount: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id'
            }
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        /* underscored: true, */
        modelName: 'plantType'
    }
);

module.exports = PlantType;