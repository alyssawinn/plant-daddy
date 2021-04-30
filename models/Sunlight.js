const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Sunlight extends Model {}

Sunlight.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrememnt: true
            },
            sunlightAmount: {
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

    module.exports = Sunlight;