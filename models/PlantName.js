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
        },
        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'plant'
        }
    );

    module.exports = PlantName;