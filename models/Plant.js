const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model {}


Plant.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      user_id: {
          type: DataTypes.INTEGER,
          references: {
              model: 'user',
              key: 'id'
          }
      },
      plantType_id: {
          type: DataTypes.INTEGER,
          references: {
              model: 'plantType',
              key: 'id'
          }
      }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        /* underscored: true, */
        modelName: 'plant'
    }
)

module.exports = Plant;