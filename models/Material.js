const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Material extends Model {}

Material.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    //   Name of Vinyl
      product_name: {
        type: DataTypes.STRING,
        allowNull:false,
      },
    //   Price of Vinyl
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          isDecimal: true,
        }
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'material',
    }
  );
  
  module.exports = Material;