const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Water extends Model {}

Water.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrememnt: true
            },
            waterAmount: {
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
            modelName: 'water'
        }
    );

    module.exports = Water;