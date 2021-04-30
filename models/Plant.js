const { Model, Datatypes, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model {}

    Plant.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrememnt: true
            },
            plantCatagory: {
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

    module.exports = Plant;