const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class PlantName extends Model {}

PlantName.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrememnt: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                //validation?
            },
            category_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'category',
                    key: 'id'
                }
            },
            water_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'water',
                    key: 'id'
                }
            },
            sunlight_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'sunlight',
                    key: 'id'
                }
            }
        },
        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'name'
        }
    );

    module.exports = PlantName;