const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Product extends Model {}

Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    //   Name of Specification e.g Wrap, Decals, Over Sized etc.
      specification_name: {
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
      modelName: 'product',
    }
  );
  
  module.exports = Product;